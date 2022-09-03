import "../styleSheets/AdminDashboard.css";
import bell from "../icons/bell.png";
import account from "../icons/account.png";
import { Link } from "react-router-dom";

const AdminRightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="admin-top-nav">
        <h3>Welcome back</h3>
        <Link to="/adminhome">
          <img className="bell-icon" alt="notification" src={bell}></img>
        </Link>
        <Link to="/adminhome">
          <img className="account-icon" alt="account" src={account}></img>
        </Link>
      </div>
      <div className="upcoming-tasks"></div>
      <div className="notes">
        <h2>Notes</h2>
        <textarea className="notes-area"></textarea>
      </div>
    </div>
  );
};

export default AdminRightSidebar;
