import { useNavigate } from "react-router-dom";
import "../styleSheets/TextUs.css";
import UserSidebar from "../components/UserSidebar";
import UserTopNav from "../components/UserTopNav";

const TextUs = () => {
  const navigate = useNavigate();

  return (
    <div className="user-ui">
      {/* <UserTopNav /> */}
      <div className="ui-container">
        <UserSidebar />
        <div className="text-messaging-content">
          <div className="text-info-box">
            <h1>Want support by text?</h1>
            <b1>Text us at 573-920-3702.</b1>
            <b1>A representative will reach out shortly.</b1>
            <button onClick={() => navigate("/userhome")}>
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextUs;
