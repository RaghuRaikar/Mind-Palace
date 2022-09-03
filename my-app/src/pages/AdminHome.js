import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import "../styleSheets/AdminDashboard.css";
import bell from "../icons/bell.png";
import account from "../icons/account.png";
import AdminRightSidebar from "../components/AdminRightSidebar";

const AdminHome = () => {
  return (
    <div className="admin-ui">
      <div className="ui-container">
        <AdminSidebar />
        <div className="dashboard-content">
          <h1>Dashboard</h1>
          <h2>Total Tasks</h2>
          <div className="task-container">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2>Chat</h2>
          <div className="task-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2>Email</h2>
          <div className="task-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <AdminRightSidebar />
        {/* <div className="right-sidebar">
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
        </div> */}
      </div>
    </div>
  );
};

export default AdminHome;
