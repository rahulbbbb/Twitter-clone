import React from 'react';
import styles from './AccountDialogueBox.module.css';
import { useNavigate } from 'react-router-dom';

function AccountDialogueBox() {

    const Navigate = useNavigate();

    const handleAddAccount = ()=> {
        Navigate('/login');
    }

  return (
    <div className={styles.accountsContainer}>
        <div onClick={handleAddAccount}>Add an existing account</div>
        <div>Log out</div>
    </div>
  )
}

export default AccountDialogueBox;