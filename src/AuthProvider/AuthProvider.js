import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';


const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loding,setLoading]=useState(true)
    const [AddCatagory,SetAddCatagory]=useState('Mobile')



    const loginwithgoogle =()=>{
      return signInWithPopup(auth, provider)

    }

     // create Eamil password
     const createEamilPassword=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)

  }
    // LogIN

    const login=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)

    }
    
    const logOut=()=>{
      localStorage.removeItem('muntajatToken')
      return signOut(auth)
    }
    // update data

    const updataData=(profile)=>{
      return updateProfile(auth.currentUser,profile)
    }

    // abserver

    useEffect(()=>{
      const unSubcriber=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser)
      })
      return ()=> unSubcriber
    },[])



    const authInfo ={
      user,
      loginwithgoogle,
       updataData,
       createEamilPassword,
       login,
       logOut,
       AddCatagory,
       SetAddCatagory,
       loding

        

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;