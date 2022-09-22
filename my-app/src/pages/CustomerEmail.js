import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserSidebar from "../components/UserSidebar";
import UserTopNav from "../components/UserTopNav";
import "../styleSheets/CustomerEmail.css";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

// For emailJS api - hide in .env later
const serviceID = "service_bj1j7ol";
const templateID = "template_q9jfwpd";
const publicKey = "mW6oS7yH46JF5vmch";

const CustomerEmail = () => {
  const navigate = useNavigate();
  const form = useRef();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    // POST email data to db
    const email = {
      name: e.target[0].value,
      emailAddress: e.target[1].value,
      subject: e.target[2].value,
      body: e.target[3].value,
    };
    const response = await fetch("http://localhost:8000/api/emails", {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      console.log(json.error);
    }

    // Send email
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    navigate("/email-confirmation");
  };

  return (
    <div className="user-ui">
      {/* <UserTopNav /> */}
      <div className="ui-container">
        <UserSidebar />
        <div className="email-content">
          <h1>Send an Email to Us</h1>
          <div className="email-form-container-user">
            <form
              ref={form}
              className="email-form-user"
              onSubmit={handleEmailSubmit}
            >
              <h2>Name</h2>
              <input type="text" placeholder="Your name" required name="name" />
              <h2>Email</h2>
              <input
                type="email"
                placeholder="YourEmail@example.com"
                required
                name="email"
              />
              <h2>Subject</h2>
              <input
                type="text"
                placeholder="Something about your inquiry..."
                required
                name="subject"
              />
              <h2>Message</h2>
              <textarea
                placeholder="Describe your issue."
                required
                name="emailBody"
              ></textarea>
              <input type="file" placeholder="Attach a file" />
              <button type="submit" className="email-submit-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerEmail;
