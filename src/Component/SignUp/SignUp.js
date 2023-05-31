import './SignUp.css';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignUpForm/SignUpForm';


export default function SignUp() {
  const [showForm, setShowForm] = useState(false);

  const handleCreateAccount = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className="logo-box">
        <FaTwitter color="Royalblue" size={35} />
        <h2>Join Twitter today</h2>

        <button>
          <FcGoogle size={25} />
          Sign up with Google
        </button>

        <button>
          <FaApple size={25} />
          Sign up with Apple
        </button>

        <hr />

        <span>or</span>

        {!showForm ? (
          <button
            style={{ background: 'black', color: 'white' }}
            onClick={handleCreateAccount}
          >
            Create account
          </button>
        ) : (
          <SignUpForm />
        )}

        <p>
          By signing up, you agree to the <a style={{ color: 'skyblue' }}>Terms of Service</a> and{' '}
          <a style={{ color: 'skyblue' }}>Privacy Policy</a>, including{' '}
          <a style={{ color: 'skyblue' }}>Cookie Use</a>.
        </p>

        <p className="last-line">
          Have an account already? <a style={{ color: 'skyblue' }}>Log in</a>
        </p>
      </div>
    </>
  );
}
