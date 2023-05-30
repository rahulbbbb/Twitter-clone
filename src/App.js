import Login from "./Component/Login/login";
import React  from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>      
      <Routes>
        <Route path= '/login' element={<Login/>}/>
        {/* <Route path= '/signup' element={<Login/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
