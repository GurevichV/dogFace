import { Navigate } from "react-router-dom";

const  ProtectedRoute = ({children}) => {
    const userInfo = localStorage.getItem("user-info");

    if(userInfo === null){
       return <Navigate to='/signin' replace /> 
    }

    return children;

}

export default ProtectedRoute;