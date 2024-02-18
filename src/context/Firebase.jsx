import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {getFirestore} from "firebase/firestore"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

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

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

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

  const handleCreateNewListing =(name,num,price,img)=>{
    
  }

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider value={{ createUser, loginUser, loginGoogle,isLoggedIn,handleCreateNewListing }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
