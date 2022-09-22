import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

import "../styleSheets/UserSidebar.css";
import indicator from "../icons/page-indicator-user.png";
import logo from "../icons/logo-user-nav.png";
import account from "../icons/account.png";

const UserSidebar = () => {
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
    <div className="sidebar">
      <div className="logo-container">
        <img className="admin-logo" alt="Logo" src={logo}></img>
      </div>
      {window.location.href.includes("userhome") && (
        <>
          <div className="home">
            <img src={indicator}></img>
            <Link to="/userhome">Home</Link>
          </div>
          <div className="order-history">
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="store-locations">
            <Link to="/location">Locations</Link>
          </div>
          <div className="webcam">
            <Link to="/webcam">Send Image</Link>
          </div>
          <div className="user-settings-div">
            <Link to="/userhome">Settings</Link>
          </div>
          <div className="user-signout">
            <button onClick={signUserOut}>
              <img
                className="user-account-icon"
                alt="account"
                src={account}
              ></img>
            </button>
          </div>
        </>
      )}
      {window.location.href.includes("faqs") && (
        <>
          <div className="home">
            <Link to="/userhome">Home</Link>
          </div>
          <div className="faqs">
            <img src={indicator}></img>
            <Link to="/userhome">FAQs</Link>
          </div>
          <div className="order-history">
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="store-locations">
            <Link to="/location">Locations</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
          <div className="user-signout">
            <button onClick={signUserOut}>
              <img
                className="user-account-icon"
                alt="account"
                src={account}
              ></img>
            </button>
          </div>
        </>
      )}
      {window.location.href.includes("user-order-history") && (
        <>
          <div className="home">
            <Link to="/userhome">Home</Link>
          </div>
          <div className="faqs">
            <Link to="/userhome">FAQs</Link>
          </div>
          <div className="order-history">
            <img src={indicator}></img>
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="store-locations">
            <Link to="/location">Locations</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
          <div className="user-signout">
            <button onClick={signUserOut}>
              <img
                className="user-account-icon"
                alt="account"
                src={account}
              ></img>
            </button>
          </div>
        </>
      )}
      {window.location.href.includes("user-support-history") && (
        <>
          <div className="home">
            <Link to="/userhome">Home</Link>
          </div>
          <div className="faqs">
            <Link to="/userhome">FAQs</Link>
          </div>
          <div className="order-history">
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <img src={indicator}></img>
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="store-locations">
            <Link to="/location">Locations</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
          <div className="user-signout">
            <button onClick={signUserOut}>
              <img
                className="user-account-icon"
                alt="account"
                src={account}
              ></img>
            </button>
          </div>
        </>
      )}
      {window.location.href.includes("user-settings") && (
        <>
          <div className="home">
            <Link to="/userhome">Home</Link>
          </div>
          <div className="faqs">
            <Link to="/userhome">FAQs</Link>
          </div>
          <div className="order-history">
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="store-locations">
            <Link to="/location">Locations</Link>
          </div>
          <div className="settings">
            <img src={indicator}></img>
            <Link to="/userhome">Settings</Link>
          </div>
          <div className="user-signout">
            <button onClick={signUserOut}>
              <img
                className="user-account-icon"
                alt="account"
                src={account}
              ></img>
            </button>
          </div>
        </>
      )}
      {window.location.href.includes("email") && (
        <>
          <div className="home">
            <Link to="/userhome">Home</Link>
          </div>
          <div className="faqs">
            <Link to="/userhome">FAQs</Link>
          </div>
          <div className="order-history">
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="store-locations">
            <Link to="/location">Locations</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
          <div className="user-signout">
            <button onClick={signUserOut}>
              <img
                className="user-account-icon"
                alt="account"
                src={account}
              ></img>
            </button>
          </div>
        </>
      )}
      {window.location.href.includes("text-us") && (
        <>
          <div className="home">
            <img src={indicator}></img>
            <Link to="/userhome">Home</Link>
          </div>
          <div className="faqs">
            <Link to="/userhome">FAQs</Link>
          </div>
          <div className="order-history">
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="store-locations">
            <Link to="/location">Locations</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
          <div className="user-signout">
            <button onClick={signUserOut}>
              <img
                className="user-account-icon"
                alt="account"
                src={account}
              ></img>
            </button>
          </div>
        </>
      )}
      {window.location.href.includes("location") && (
        <>
          <div className="home">
            <Link to="/userhome">Home</Link>
          </div>
          <div className="faqs">
            <Link to="/userhome">FAQs</Link>
          </div>
          <div className="order-history">
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="store-locations">
            <img src={indicator}></img>
            <Link to="/location">Locations</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
          <div className="user-signout">
            <button onClick={signUserOut}>
              <img
                className="user-account-icon"
                alt="account"
                src={account}
              ></img>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserSidebar;
