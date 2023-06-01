import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoutes({ Home }) {

  const { isLoggedIn } = useSelector((state)=>state.login);

  const Navigate = useNavigate();

  if(isLoggedIn){
    return Home;    
  }
  return Navigate('/login');
  
}

export default ProtectedRoutes;