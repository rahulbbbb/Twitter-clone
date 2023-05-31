import styles from "./login.module.css";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
 import { Link } from 'react-router-dom';
import { getUsers } from "./localStorage";
import Button from "@mui/material/Button";
import { isUserSignedInAtom } from "./recoil";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { IconButton } from '@mui/material';


export default function Login() {
  const setUser = useSetRecoilState(isUserSignedInAtom);
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [userList, setUserList] = useState([
    {
      username: "",
      password: "",
    },
  ]);
  const nav = useNavigate();

  useEffect(() => {
    const data = getUsers();
    setUserList(data);
  }, []);

  // Check if user is already signed in, and redirect to home page
  useEffect(() => {
    const isSignedIn = localStorage.getItem("isSignedIn");
    if (isSignedIn === "true") {
      setUser(true);
      nav("/");
    }
  }, [setUser, nav]);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (e) => {
  //   alert("data submitted");
  // };

  function handleSubmit(event) {
    event.preventDefault();
    if (userNameRef.current.value === "" || passwordRef.current.value === "") {
      alert("Fill the form first");
    }

    const userObj = userList.find(
      (obj) =>
        obj?.username === userNameRef.current.value &&
        obj?.password === passwordRef.current.value
    );

    if (userObj !== undefined) {
      localStorage.setItem("isSignedIn", "true");
      setUser(true);
      alert(`${userObj?.username} you are successfully logged in`);
      nav("/");
    } else {
      alert("Please register first");
    }
  }

    function handleSignUp(){
    nav('/signup')
  }

  return (
    <>
      <div className={styles.logo_box}>
        <div className={styles.header}>
          <GrClose />
        </div>
        <FaTwitter color="Royalblue" size={35} />

        <h1 style={{ marginBottom: "15px" }}>Sign in to Twitter</h1>
        <button className={styles.btn}>
          <FcGoogle size={20} style={{ marginRight: "5px" }} />
          Sign up with Google
        </button>
        

        <button className={styles.btn}>
          <FaApple size={20} style={{ marginRight: "5px" }} />
          Sign up with Apple
        </button>
        <hr></hr>
        <span>or</span>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            ref={userNameRef}
            type="username"
            placeholder="username"
            required
          /><br/>
          <input
            className={styles.input}
            ref={passwordRef}
            type="password"
            placeholder="password"
            required
          />
          <br />
          <Button
            className={styles.login_btn}
            variant="contained"
            type="submit"
            sx={{ borderRadius: 10, backgroundColor: "black", color: "White" }}
          >
            Login
          </Button>
        </form>

        <button
          className={styles.next_btn}
          style={{ background: "white", color: "black" }}
        >
          Forgot Passward?
        </button>

        <p className={styles.last_line}>
          Don't Have an account ? <Link to='/signup' style={{ color: "skyblue" }}>Sign Up</Link>
        </p>
      </div>
    </>
  );
}
