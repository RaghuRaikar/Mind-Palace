import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styleSheets/AdminLogin.css";
import loginLogo from "../icons/admin-login-logo.png";

function AdminAuth({ setIsUser }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isUser", true);
      setIsUser(true);
      navigate("/adminhome");
    });
  };

  return (
    <div className="admin-login-screen">
      <div className="admin-login-screen-left">
        <img src={loginLogo} alt="Logo"></img>
        <h1>The Shoe Hut</h1>
      </div>
      <div className="admin-login-screen-right">
        <form className="admin-login-form">
          <h1>Welcome back</h1>
          <label>Email</label>
          <input placeholder="name@email.com" type="email"></input>
          <label>Password</label>
          <input type="password"></input>
          <button className="admin-login-button">Sign in</button>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
    // <div className="loginPage">

    // </div>
  );
}

export default AdminAuth;
