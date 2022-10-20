import ProjectRoutes from './Routes';
import Header from './Components/Header/Header';
import Footer from './Components/footer/Footer';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import useApiService from './services/api-service';
import { useEffect, useState } from 'react';
import {useDispatch} from "react-redux"
import { setUserInfo } from './actions';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { getAccountInfo } = useApiService();


  useEffect(() => {
    getAccountInfo().then((result)=>{
        dispatch(setUserInfo(result))
        setIsLoading(false);
    })
}, [])

  return (
    <>
    {isLoading ? 'Loading...' : <><Header />
      <div className="main">
        <ProjectRoutes />
      </div>
      <Footer /></>}
      
    </>
  );
}

export default App;


