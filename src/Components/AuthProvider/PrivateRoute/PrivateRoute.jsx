import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay for loading, and check for user session
        const checkUser = () => {
            setLoading(false);
        };

        // Wait for the user data to be checked
        checkUser();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return children; // If user is logged in, show the content
    }

    return <Navigate to="/login" />; // If no user, redirect to login
};

export default PrivateRoute;