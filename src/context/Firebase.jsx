import {initializeApp} from "firebase/app"
import { createContext, useContext } from "react";

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyByRGRmk8tZ0pAj1txRf4EaQo3WeKgrDis",
  
    authDomain: "bookify-58205.firebaseapp.com",
  
    projectId: "bookify-58205",
  
    storageBucket: "bookify-58205.appspot.com",
  
    messagingSenderId: "134983849875",
  
    appId: "1:134983849875:web:95ba554d6292b28948ba66"
  
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const FirebaseContext = createContext(null);

  const firebaseAuth = getAuth(firebaseApp);

  const createUser = (email,password)=>{
    createUserWithEmailAndPassword(firebaseAuth,email,password);
  }

  const loginUser = (email,password)=>{
    signInWithEmailAndPassword (firebaseAuth,email,password);
  }


  export const useFirebase= () => useContext(FirebaseContext);

  export const FirebaseProvider =(props)=>{
    return(
        <FirebaseContext.Provider value={{createUser,loginUser}}>
        {props.children}
        </FirebaseContext.Provider>
    )
  }


  