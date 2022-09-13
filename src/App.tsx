import { useLocation } from 'react-router-dom';
import ProjectRoutes from './Routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/signin' || '/signup' ? null : <Header />}
      <div className="main">
        <ProjectRoutes />
      </div>
      {pathname === '/signin' || '/signup' ? null : <Footer />}
    </>
  );
}

export default App;
