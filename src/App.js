import Login from "./Component/Login/login";
import React  from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import SignUpForm from "./SignUpForm/SignUpForm";


function App() {
  return (
    <div>
      <Navbar/>      
      <Routes>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/signup' element={<SignUp/>}/>
        <Route path= '/signupform' element={<SignUpForm/>}/>

      </Routes>
       
      
    </div>
  );
}

export default App;
