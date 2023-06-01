import React from 'react';
import styles from './AccountDialogueBox.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/LoginSlice';

function AccountDialogueBox() {

    const Dispatch = useDispatch();

    const Navigate = useNavigate();

    const handleAddAccount = ()=> {
        Navigate('/login');
    }

    const handleLogOut = ()=> {
      Dispatch(userLogin(false));
      Navigate('/login');
    }

  return (
    <div className={styles.accountsContainer}>
        <div onClick={handleAddAccount}>Add an existing account</div>
        <div onClick={handleLogOut}>Log out</div>
    </div>
  )
}

export default AccountDialogueBox;