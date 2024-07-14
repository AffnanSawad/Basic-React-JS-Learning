import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    // importing user from AuthContext
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    
    if(user){
        return children;
    }

    // Navigate => user na thakle auto LOGIN page e niye jabe...
    return <Navigate to='/login'>Log IN</Navigate>



};

export default PrivateRoute;