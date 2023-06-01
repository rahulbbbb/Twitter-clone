
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeP from "./Pages/HomeP";
import LoginP from "./Pages/LoginP";
import SignUpP from "./Pages/SignUpP";
//import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import ForgotPassward from "./Component/Pages/forgotPass";
import GetOTP from "./Component/Pages/getOTP";

function App() {
  return (
    <div>
      
      <Routes>
        <Route index
          path="/"
          element={
            //<ProtectedRoutes>
              <HomeP />
            //</ProtectedRoutes>
          }
        />
        <Route path="/signup" element={<SignUpP/>} />
        <Route path="/login" element={<LoginP />} />
        <Route path= '/forgotPass' element={<ForgotPassward/>}/>
        <Route path='/getOTp' element={<GetOTP/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
