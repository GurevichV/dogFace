import { Navigate } from "react-router-dom";

const  ProtectedRoute = ({children}) => {
    const user_info = localStorage.getItem("user-info");

    if(user_info === null){
       return <Navigate to='/signin' replace /> 
    }

    return children;

}

export default ProtectedRoute;