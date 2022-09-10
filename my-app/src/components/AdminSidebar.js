import { Link } from "react-router-dom";
import "../styleSheets/AdminSidebar.css";
import indicator from "../icons/page-indicator-user.png";
import logo from "../icons/logo-user-nav.png";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img className="admin-logo" alt="Logo" src={logo}></img>
      </div>
      {window.location.href.includes("adminhome") && (
        <>
          <div className="home">
            <img src={indicator}></img>
            <Link to="/adminhome">Dashboard</Link>
          </div>
          <div className="chat">
            <Link to="/userhome">Chat</Link>
          </div>
          <div className="email">
            <Link to="/admin-email-view">Email</Link>
          </div>
          <div className="video">
            <Link to="/videocall">Video Chat</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
        </>
      )}
      {window.location.href.includes("admin-email-view") && (
        <>
          <div className="home">
            <Link to="/adminhome">Dashboard</Link>
          </div>
          <div className="chat">
            <Link to="/userhome">Chat</Link>
          </div>
          <div className="email">
            <img src={indicator}></img>
            <Link to="/admin-email-view">Email</Link>
          </div>
          <div className="video">
            <Link to="/videocall">Video Chat</Link>
          </div>
          <div className="settings">
            <Link to="/userhome">Settings</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminSidebar;
