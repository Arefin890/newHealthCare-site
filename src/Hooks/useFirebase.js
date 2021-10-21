import React from 'react';
import firebaseInitialize from '../Authentication/firebase.initialize';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();
const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    const handleUser = e => {
        e.preventDefault();
        !isLogin ? createNewUser(email, password) : processLogin(email, password)
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleIsLogin = e => {
        setIsLogin(e.target.checked);
    }

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser('')
            }
            setIsLoading(false);
        })
    }, [])

    const handleLogOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))

    }
    return {
        user,
        isLogin,
        isLoading,
        error,
        setIsLoading,
        handleEmail,
        handlePassword,
        handleIsLogin,
        handleUser,
        googleSignIn,
        handleLogOut

    }
}

export default useFirebase;