import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)

    if(user){
        return children;
    }
    else{
        <div>Loading.....</div>
    }

    return (
        <Navigate to='/login'>

        </Navigate>
    );
};

export default PrivateRoute;