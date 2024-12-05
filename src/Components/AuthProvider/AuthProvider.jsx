import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
import { removeItem } from "localforage";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth , email, password)
    } 

    const logOut = () =>{
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User", currentUser);
            if(currentUser){
                const infoOfUser = {email: currentUser?.email}
                axios.post('http://localhost:5000/jwt', infoOfUser)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        console.log(res.data);
                        setUser(currentUser)

                        
                    }
                })
            }

            else{
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
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;