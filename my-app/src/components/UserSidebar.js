import { Link } from "react-router-dom";
import "../styleSheets/UserSidebar.css";
import indicator from "../icons/page-indicator-user.png";
import logo from "../icons/logo-user-nav.png";

const UserSidebar = () => {
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
          <div className="faqs">
            <Link to="/userhome">FAQs</Link>
          </div>
          <div className="order-history">
            <Link to="/userhome">Order History</Link>
          </div>
          <div className="support-history">
            <Link to="/userhome">Support History</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
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
          <div className="settings">
            <Link to="/userhome">Settings</Link>
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
          <div className="settings">
            <Link to="/userhome">Settings</Link>
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
          <div className="settings">
            <Link to="/userhome">Settings</Link>
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
          <div className="settings">
            <img src={indicator}></img>
            <Link to="/userhome">Settings</Link>
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
          <div className="settings">
            <Link to="/userhome">Settings</Link>
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
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserSidebar;
