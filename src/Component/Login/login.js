import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { getUsers } from "./localStorage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/LoginSlice";

export default function Login() {
  let userArr = JSON.parse(localStorage.getItem("users"));

  const Dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    userArr.map(function (elem) {
      let userEmail = document.getElementById("email").value;
      let userPass = document.getElementById("pass").value;

      if (elem.email === userEmail && elem.password === userPass) {
        alert("Login Successfull");
        Dispatch(userLogin(true));
        navigate("/home");
      } else if (elem.pass !== userPass || elem.email !== userEmail) {
        alert("Invalid Email OR Passward");
      }
    });
  }

  function handleForgotPassward() {
    navigate("/forgotPass");
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
          <FcGoogle size={19} style={{ marginRight: "5px" }} />
          Sign up with Google
        </button>

        <button className={styles.btn}>
          <FaApple size={19} style={{ marginRight: "5px" }} />
          Sign up with Apple
        </button>
        <hr></hr>
        <span>or</span>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            className={styles.input}
            type="password"
            id="pass"
            placeholder="Password"
            required
          />
          <br />

          <input className={styles.input_submit} type="submit" id="login" />
        </form>

        <button
          onClick={handleForgotPassward}
          className={styles.next_btn}
          style={{ background: "white", color: "black" }}
        >
          Forgot Passward?
        </button>

        <p className={styles.last_line}>
          Don't Have an account ?{" "}
          <Link to="/signup" style={{ color: "skyblue" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}