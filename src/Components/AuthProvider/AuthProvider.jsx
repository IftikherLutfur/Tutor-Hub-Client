import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
            .the(result => {
                const loggedInInfo = result.user;
                console.log("Google login successful", loggedInInfo);

                const infoOfUser = { email: loggedInInfo.email }
                axios.post('https://tutor-hub-server.vercel.app/jwt', infoOfUser)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            console.log("JWT Token recieved", res.data.token);

                        }
                    })

                setUser(loggedInInfo)

            })
            .catch(error => {
                console.error("Google Login Error", error)
            })
    }

    const update = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User", currentUser);
            if (currentUser) {
                const infoOfUser = { email: currentUser?.email }
                axios.post('https://tutor-hub-server.vercel.app/jwt', infoOfUser)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            console.log(res.data);
                            setUser(currentUser)


                        }
                    })
            }

            else {
                localStorage.removeItem('access-token')
                setUser(null)
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        signUp,
        logIn,
        logOut,
        googleLogin,
        update
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;