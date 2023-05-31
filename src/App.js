import Login from "./Component/Login/login";
import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp/SignUp";
import Home from "./Component/HomePage/Home";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import RightsideSection from "./Component/RightsideSection/RightSection";

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
              <RightsideSection/>
            </ProtectedRoutes>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
