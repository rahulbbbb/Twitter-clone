import Login from "./Component/Login/login";
import React  from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import SignUp from "./Component/SignUp/SignUp";
import SignUpForm from "./Component/SignUpForm/SignUpForm";


function App() {
  return (
    <div>
      <Navbar/>      
      <Routes>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/signup' element={<SignUp/>}/>

      </Routes>
       
      
    </div>
  );
}

export default App;
