import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages and components
import Login from './pages/login/Login'
import Signin from './pages/signin/Signin'
import Search from './pages/search/Search';
import Share from './pages/share/Share';
import About from './pages/about/About';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/codeathome_final_project/" element={<Login />} />
          <Route path="/codeathome_final_project/login" element={<Login />} />
          <Route path="/codeathome_final_project/signin" element={<Signin />} />
          <Route path="/codeathome_final_project/search" element={<Search />} />
          <Route path="/codeathome_final_project/share" element={<Share />} />
          <Route path="/codeathome_final_project/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

