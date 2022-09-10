import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
    <div className="loginPage">
      <p> Admin Login/Signup </p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default AdminAuth;
