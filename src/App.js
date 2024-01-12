import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages and components
import Login from './pages/login/Login'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Routes>
        <Route path="/codeathome_final_project/login" element={<Login />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

