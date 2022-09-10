import "../styleSheets/UserHome.css";
import UserSidebar from "../components/UserSidebar";
import UserTopNav from "../components/UserTopNav";
import { useNavigate } from "react-router-dom";
import emailinquiry from "../icons/email-user-icon.png";
import chatWithUs from "../icons/chat-user-icon.png";
import textUs from "../icons/mobile-user-icon.png";
import questionMark from "../icons/faq-user-icon.png";

const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="user-ui">
      {/* <UserTopNav /> */}

      <div className="ui-container">
        <UserSidebar />
        <div className="home-content">
          <h1>Welcome to The Shoe Hut's Support Centre!</h1>
          <h2>How can we help today?</h2>
          <h2> Popular Topics</h2>
          <div className="top-row">
            <div className="track-order">
              <h2> Track Online Order</h2>
              <b1>You can track, view or reschedule your online order here!</b1>
              <button>Track Order</button>
            </div>
            <div className="cancel-order">
              <h2>Cancel Order</h2>
              <b1>
                Sorry to hear! We will do our best to help cancel your order
              </b1>
              <button>Cancel Order</button>
            </div>
            <div className="product-inquiry">
              <h2>Product Inquiry</h2>
              <b1>Have a question about a certain product? Check here!</b1>
              <button>Product Information</button>
            </div>
          </div>
          <div className="bottom-row">
            <div className="online-return">
              <h2>Online Return</h2>
              <b1>
                Didn’t like the items you ordered? No worries! Start a return.
              </b1>
              <button>Return Order</button>
            </div>
            <div className="damaged-item">
              <h2>Damaged Item</h2>
              <b1>
                Sorry for the damaged item! We will do our best to resolve this
                issue.
              </b1>
              <button>Replace Item</button>
            </div>
            <div className="stock-check">
              <h2>Stock Check</h2>
              <b1>
                Looking for a particular item? Find out if it’s available
                elsewhere!
              </b1>
              <button>Return Order</button>
            </div>
          </div>
          <h2>Still have questions? We're here to help!</h2>
          <div className="contact-selections">
            <div onClick={() => navigate("/email-us")}>
              <img
                className="contact-us-img"
                alt="FAQ"
                src={questionMark}
              ></img>
              <b1 className="contact-us-text">FAQs</b1>
            </div>

            <div onClick={() => navigate("/email-us")}>
              <img
                className="contact-us-img"
                alt="Live Chat"
                src={chatWithUs}
              ></img>
              <b1 className="contact-us-text">Chat with us</b1>
            </div>

            <div onClick={() => navigate("/email-us")}>
              <img
                className="contact-us-img"
                alt="email us"
                src={emailinquiry}
              ></img>
              <b1 className="contact-us-text">Email Inquiry</b1>
            </div>
            <div onClick={() => navigate("/text-us")}>
              <img className="contact-us-img" alt="Text Us" src={textUs}></img>
              <b1 className="contact-us-text">Text Us</b1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
