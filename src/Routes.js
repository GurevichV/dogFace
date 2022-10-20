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
import AccountPage from "./Pages/AccountPage";
import Calendar from "./Pages/Calendar";
import History from "./Pages/History";
import Dashboard from "./Pages/Dashboard";

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="dashboard" element={<ProtectedRoute>
                                    <Dashboard /> 
                                </ProtectedRoute> }>
                <Route index element={<AccountPage />} />
                <Route path="account" element={ 
                                    <ProtectedRoute>
                                        <AccountPage/> 
                                    </ProtectedRoute>  } >
                    <Route index element={<ProfilePage />} />
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
                    <Route path="*" element={<Page404 />} />
                </Route>
                <Route path="calendar" element={<Calendar/>} />
                <Route path="history" element={<History/>} />
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default ProjectRoutes;

