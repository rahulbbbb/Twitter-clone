import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ Home }) {
  const isLogin = true;
  const Navigate = useNavigate();

  if(!isLogin){
    return Navigate('/login');
  }
  return Home;
}

export default ProtectedRoutes;