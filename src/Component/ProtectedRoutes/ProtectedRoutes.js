import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ Home }) {
  const isLogin = false;

  if(!isLogin){
    return <Navigate to='/login'/>
  }
  else return Home;
}

export default ProtectedRoutes;