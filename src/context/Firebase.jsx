import {initializeApp} from "firebase/app"
import { createContext, useContext } from "react";

const firebaseConfig = {

    apiKey: "AIzaSyByRGRmk8tZ0pAj1txRf4EaQo3WeKgrDis",
  
    authDomain: "bookify-58205.firebaseapp.com",
  
    projectId: "bookify-58205",
  
    storageBucket: "bookify-58205.appspot.com",
  
    messagingSenderId: "134983849875",
  
    appId: "1:134983849875:web:95ba554d6292b28948ba66"
  
  };

  const FirebaseContext = createContext(null);


  export const useFirebase= () => useContext(FirebaseContext);

  export const FirebaseProvider =(props)=>{
    return(
        <FirebaseContext.Provider>
        {props.children}
        </FirebaseContext.Provider>
    )
  }


  const firebaseApp = initializeApp(firebaseConfig);
  