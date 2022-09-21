import ProjectRoutes from './Routes';
import Header from './Components/Header/Header';
import Footer from './Components/footer/Footer';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header />
      <div className="main">
        <ProjectRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
