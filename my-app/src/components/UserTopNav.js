import "../styleSheets/UserTopNav.css";
import { Link } from "react-router-dom";
import bell from "../icons/bell.png";
import account from "../icons/account.png";
import logo from "../icons/logo-user-nav.png";

const UserTopNav = () => {
  return (
    <div className="top-nav">
      <div className="left-side-icons">
        <img className="logo" alt="Logo" src={logo}></img>
      </div>
      <div className="right-side-icons">
        <Link to="/userhome">
          <img className="bell-icon" alt="notifications" src={bell}></img>
        </Link>
        <Link to="/userhome">
          <img className="account-icon" alt="account" src={account}></img>
        </Link>
      </div>
    </div>
  );
};

export default UserTopNav;
