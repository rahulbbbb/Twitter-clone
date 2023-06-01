import Login from "./Component/Login/login";
import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp/SignUp";
import Home from "./Component/HomePage/Home";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import ForgotPassward from "./Component/Pages/forgotPass";
import GetOTP from "./Component/Pages/getOTP";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path= '/forgotPass' element={<ForgotPassward/>}/>
        <Route path='/getOTp' element={<GetOTP/>}/>
      </Routes>
    </div>
  )
}

export default App;
