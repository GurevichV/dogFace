import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home-page/HomePage";
import Page404 from "./Pages/404Page";
import SignIn from './Components/Login/SignIn'
import SignUp from './Components/Login/SignUp'
import SearchPage from './Pages/SearchPage';
import ProfilePage from './Pages/ProfilePage';
import ProtectedRoute from "./ProtectedRoute";
import DogPage from "./Pages/DogPage";
import DogsitterPage from "./Pages/DogsitterPage";
import SettingsPage from "./Pages/SettingsPage";
import UserPage from "./Pages/UserPage";

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/signin" element={<SignIn/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route path="/user"element={ 
                                <ProtectedRoute>
                                    <UserPage/> 
                                </ProtectedRoute>  } >
                  <Route path="profile"element={ 
                                <ProtectedRoute>
                                    <ProfilePage/> 
                                </ProtectedRoute> } />
                <Route path="my-dogs"element={ 
                                    <ProtectedRoute>
                                        <DogPage/> 
                                    </ProtectedRoute>  } />
                <Route path="dogsitter"element={ 
                                    <ProtectedRoute>
                                        <DogsitterPage/> 
                                    </ProtectedRoute>  }/>
                <Route path="settings"element={ 
                                    <ProtectedRoute>
                                        <SettingsPage/> 
                                    </ProtectedRoute>  }/>
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default ProjectRoutes;

