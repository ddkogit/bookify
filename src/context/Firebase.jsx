import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs,getDoc,doc } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByRGRmk8tZ0pAj1txRf4EaQo3WeKgrDis",

  authDomain: "bookify-58205.firebaseapp.com",

  projectId: "bookify-58205",

  storageBucket: "bookify-58205.appspot.com",

  messagingSenderId: "134983849875",

  appId: "1:134983849875:web:95ba554d6292b28948ba66",
};

const firebaseApp = initializeApp(firebaseConfig);
const FirebaseContext = createContext(null);

const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

const firestore = getFirestore(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  const storage = getStorage(firebaseApp);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const loginGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  const handleCreateNewListing = async (name, num, price, img) => {
    const imgRef = ref(storage, `uploads/images/${Date.now()}-${img}`);
    const uploadResult = await uploadBytes(imgRef, img);
    return await addDoc(collection(firestore, "books"), {
      name,
      num,
      price,
      imgURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  const listAllBooks = () => {
    return getDocs(collection(firestore, "books"));
  };

  const getImgURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  const getBookById = async (id)=>{
    const docRef =  doc(firestore,"books",id);
    const result = await getDoc(docRef) ;
    return result;
    
  }

  const placeOrder=async (bookId,qty)=>{
    const collRef = collection(firestore,"books",bookId,"orders");
    const result = await addDoc(collRef,{
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      qty:Number(qty),
    });
    return result;

  }

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        createUser,
        loginUser,
        loginGoogle,
        isLoggedIn,
        handleCreateNewListing,
        listAllBooks,
        getImgURL,
        getBookById,
        placeOrder,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
