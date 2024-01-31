import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//pages and components
import Login from './pages/login/Login'
import Signin from './pages/signin/Signin'
import Search from './pages/search/Search';
import Share from './pages/share/Share';
import About from './pages/about/About';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
              path="/codeathome_final_project/" 
              element={user ? <Navigate to="/codeathome_final_project/search" /> : <Login />} />
          <Route 
              path="/codeathome_final_project/login" 
              element={user ? <Navigate to="/codeathome_final_project/search" /> : <Login />} />
          <Route 
              path="/codeathome_final_project/signin" 
              element={user ? <Navigate to="/codeathome_final_project/search" /> : <Signin />} />
          <Route 
              path="/codeathome_final_project/search" 
              element={!user ? <Navigate to="/codeathome_final_project/login" /> : <Search />} />
          <Route 
              path="/codeathome_final_project/share" 
              element={!user ? <Navigate to="/codeathome_final_project/login" /> : <Share />} /> 
          <Route 
              path="/codeathome_final_project/about" 
              element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;

