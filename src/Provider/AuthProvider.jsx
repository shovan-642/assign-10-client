import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    

    const auth = getAuth(app)

    const [loading, setLoading]=useState(true)
    const [user, setUser]=useState(null)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        

    }

    const logout =()=>{
        setLoading(true)
        return signOut(auth)
    }


    const updatedProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo= {
        user,
        setUser, 
        loading, 
        setLoading,
        createUser, 
        logout, 
        login,
        signInWithGoogle,
        updatedProfile,

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;