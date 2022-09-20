import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home-page/HomePage";
import Page404 from "./Pages/404Page";
import SignIn from './Components/Login/SignIn'
import SignUp from './Components/Login/SignUp'
import SearchPage from './Pages/SearchPage';
import Profile from './Pages/Profile';
import ProtectedRoute from "./ProtectedRoute";


const ProjectRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/signin" element={<SignIn/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route path="/profile"element={ 
                                <ProtectedRoute>
                                    <Profile/> 
                                </ProtectedRoute>  }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default ProjectRoutes;

