import { useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/Firebase.init";

// initialize Firebase App-----------------------------
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('');

    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name, history) => {
        // Loading ------------------------------------------------
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');

                const newUser = { email, displayName: name }
                setUser(newUser);

                // save new user to the database------------------------------------
                saveUser(email, name, 'POST');

                //  send name to firebase after creation -------------------------

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                    // Profile updated!

                }).catch((error) => {

                    // An error occurred

                });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
        // loading stopped ----------------------
    }




    const loginUser = (email, password, history, location) => {
        // Loading ------------------------------------------------
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(location.state)
                const destination = location?.state?.from || '/dashboard';
                // console.log(destination);
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
        // loading stopped ----------------------
    }




    const signInWithGoogle = (history, location) => {

        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;

                // save new user to database -----------
                saveUser(user.email, user.displayName, 'PUT');

                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);

                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
    }, [user.email])


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        })
            .finally(() => setIsLoading(false));;
    }




    // observer user state --------------
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    // useEffect(() => {
    //     fetch(`https://shielded-savannah-24056.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdmin(data.admin);
    //         })
    // }, [user.email])


    const saveUser = (email, displayName, methodName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: methodName,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

    }


    return {
        user,
        admin,
        token,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        isLoading,
        authError
    }
}

export default useFirebase;