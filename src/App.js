import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages and components
import Login from './pages/login/Login'
import Signin from './pages/signin/Signin'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Routes>
        <Route path="/codeathome_final_project/login" element={<Login />} />
        <Route path="/codeathome_final_project/signin" element={<Signin />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

