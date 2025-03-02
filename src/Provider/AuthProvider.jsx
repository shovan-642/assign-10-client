import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext()




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

    const authInfo= {
        user,
        setUser, 
        loading, 
        setLoading,
        createUser, 
        logout, 
        login,

    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;