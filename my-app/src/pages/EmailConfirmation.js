import { useNavigate } from "react-router-dom";
import "../styleSheets/EmailConfirmation.css";
import UserSidebar from "../components/UserSidebar";
import UserTopNav from "../components/UserTopNav";

const EmailConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="user-ui">
      {/* <UserTopNav /> */}
      <div className="ui-container">
        <UserSidebar />
        <div className="email-confirmation-content">
          <div className="confirmation-box">
            <h1>We got your email!</h1>
            <b1>We'll aim to reply in approximately 1 - 2 business days.</b1>
            <b1>Have more questions? Read our FAQs!</b1>
            <button onClick={() => navigate("/userhome")}>
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
