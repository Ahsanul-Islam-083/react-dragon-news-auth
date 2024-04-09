import { useContext } from "react";
import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivareRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location =useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"></div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivareRoute;