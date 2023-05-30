// import React from 'react';
import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div>
//         <Link to='/' >Home</Link>
//         <Link to='/login' >Login</Link>
//         <Link to='/signup' >Signup</Link>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subcontainer}>
            <div className={styles.text}>
              <p className={styles.text1}>
               Don’t miss what’s happening
              </p>
              <p className={styles.text2}> People on Twitter are the first to know.</p>
            </div>
     

            <div>
              <button className={styles.btn}><Link className={styles.btn1} to='/login'>Login</Link></button>
              <button className={styles.btn2}><Link className={styles.btn3} to='/signup'>Signup</Link></button>
            </div>
        </div>
       

    </div>
  )
}

export default Navbar;