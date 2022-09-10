import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styleSheets/UserLogin.css";
import loginLogo from "../icons/user-login-logo.png";

function CustomerAuth({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/userhome");
    });
  };

  return (
    <div className="loginPage">
      <img src={loginLogo} alt="Logo"></img>
      <h1> The Shoe Hut Support Centre </h1>
      <form className="user-login-form">
        <label>Email</label>
        <input placeholder="name@email.com" type="email"></input>
        <label>Password</label>
        <input type="password"></input>
        <button>Sign in</button>
      </form>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default CustomerAuth;
