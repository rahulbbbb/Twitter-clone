import { useNavigate } from "react-router-dom";
import styles from "./getOTP.module.css";

export default function GetOTP() {
    const navigate  = useNavigate();

    function veryfyOTP(){
        navigate('/')
    }
  return (
    <>
      <div className={styles.main_div}>
        <div className={styles.passward_div}>
          <form action="#">
            <h3>Enter OTP</h3>
            <div classname={styles.passward}>
              <input type="tel" />
              <input type="tel" />
              <input type="tel" />
              <input type="tel" />
              <input type="tel" />
              <input type="tel" />
            </div>
          </form>

        </div>
        <button className={styles.forgot_btn} onClick={veryfyOTP}>Verify</button>
      </div>
    </>
  );
}
