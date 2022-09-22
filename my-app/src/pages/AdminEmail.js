import { useState, useEffect } from "react";
import AdminRightSidebar from "../components/AdminRightSidebar";
import AdminSidebar from "../components/AdminSidebar";
import "../styleSheets/AdminEmail.css";

const AdminEmail = () => {
  const [emails, setEmails] = useState([]);

  // load emails from db
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/emails");
        const json = await response.json();
        if (response.ok) {
          console.log("ok");
          setEmails(json);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmails();
  }, []);

  return (
    <div className="admin-ui">
      <div className="ui-container">
        <AdminSidebar />
        <div className="admin-email-content">
          <div className="admin-email-view-container">
            {emails ? (
              emails.map((email) => (
                <div
                  key={email._id}
                  className="single-email"
                  onClick={() => console.log("on click show reply form")}
                >
                  <h3>
                    Name: {email.name} <br></br>
                    Email: {email.emailAddress} <br></br>
                    Subject: {email.subject}
                  </h3>
                  <p>{email.body}</p>
                </div>
              ))
            ) : (
              <div className="single-email">No emails to display</div>
            )}
          </div>
          <div className="admin-email-response-container">
            <div className="email-response-area" contentEditable></div>
            <button className="admin-email-reply-button">Reply</button>
          </div>
        </div>
        <AdminRightSidebar />
      </div>
    </div>
  );
};

export default AdminEmail;
