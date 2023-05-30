import styles from './login.module.css';
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import{FaTwitter} from "react-icons/fa";
 import { GrClose } from "react-icons/gr";

export default function Login() {
  return (
    <>
      <div className={styles.logo_box}>
          <div className={styles.header}>
          <GrClose/>
          </div>
          <FaTwitter color="Royalblue" size={35}/>

        <h1>Sign in to Twitter</h1>
        <button className={styles.btn}> 
             <FcGoogle size={20} style={{ marginRight:'5px'}}/>
              Sign up with Google
        </button>

        <button className={styles.btn}>
            <FaApple size={20} style={{ marginRight:'5px'}}/>
             Sign up with Apple
        </button>
<hr></hr>

        <span>or</span>

        <TextField className={styles.TextField} id="outlined-basic" label="Email" variant="outlined" />

        <button className={styles.next_btn} style={{ background: "black", color: "white" }}>
         Next
        </button>

        <button className={styles.next_btn} style={{ background: "white", color: "black" }}>
         Forgot Passward?
        </button>
       

        <p className={styles.last_line}>
          Have an account already? <a style={{ color: "skyblue" }}>Sign Up</a>
        </p>
      </div>
    </>
  );
}
