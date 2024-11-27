import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current User", currentUser);
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        signUp,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;