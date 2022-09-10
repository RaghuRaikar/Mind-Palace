import "../styleSheets/AdminDashboard.css";
import account from "../icons/account.png";
//import bell from "../icons/bell.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const AdminRightSidebar = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isUser, setIsUser] = useState(localStorage.getItem("isUser"));

  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      setIsUser(false);
      //window.location.pathname = "/";
      navigate("/");
    });
  };

  return (
    <div className="right-sidebar">
      <div className="admin-top-nav">
        <h3>Welcome back</h3>
        {/* <button>
          <img className="bell-icon" alt="notification" src={bell}></img>
        </button> */}
        <button onClick={signUserOut}>
          <img className="admin-account-icon" alt="account" src={account}></img>
        </button>
      </div>
      <div className="upcoming-tasks">
        <h2>Upcoming Tasks</h2>
      </div>
      <div className="notes">
        <h2>Notes</h2>
        <textarea className="notes-area"></textarea>
      </div>
    </div>
  );
};

export default AdminRightSidebar;
