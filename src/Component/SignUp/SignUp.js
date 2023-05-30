import styles from './SignUp.module.css';
import { FcGoogle } from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import{FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SignUp (){
    return(
        <>
        <div className={styles.logoBox}>
        <FaTwitter color="Royalblue" size={35}/>
            <h2>Join Twitter today</h2>

            <button>
            <FcGoogle size={25} />
            Sign up with Google
            </button>

            <button>
            <FaApple size={25}/>
            Sign up with Apple
            </button>

            <hr></hr>
            <span>or</span>

            <button style={{background:'black', color:'white',}}>
            Create account
            </button>

            <p>By signing up, you agree to the <a style={{color:'skyblue'}}>Terms of Service</a> and <a style={{color:'skyblue'}}>Privacy Policy,</a>
            including <a style={{color:'skyblue'}}>Cookie Use.</a></p>
            <p className={styles.lastLine}>Have an account already? <Link to='/login' style={{color:'skyblue'}}>Log in</Link></p>
        </div>
        </>
    
    )
}