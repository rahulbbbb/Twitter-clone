import React, { useState } from 'react';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

     storedUsers.push(user);
    
    localStorage.setItem('users', JSON.stringify(storedUsers));
    
    setUser({
      name: '',
      email: '',
      phone: '',
      dob: '',
    });
  };

  return (
    <form className={styles.logobox} onSubmit={handleSignUp}>
        <h1>Create your account</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
        className={styles.inputField}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
        className={styles.inputField}
      />
      <input
        type="tel"
        name="phone"
        value={user.phone}
        onChange={handleInputChange}
        placeholder="Phone"
        required
        className={styles.inputField}
      />
      <input
        type="date"
        name="dob"
        value={user.dob}
        onChange={handleInputChange}
        placeholder="Date of Birth"
        required
        className={styles.inputField}
      />

      <button  style={{ background: 'black', color: 'white' }} className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;

