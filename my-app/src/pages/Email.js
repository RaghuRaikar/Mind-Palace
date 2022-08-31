import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styleSheets/EmailStyle.css";

// For emailJS api - hide in .env later
const serviceID = "service_bj1j7ol";
const templateID = "template_q9jfwpd";
const publicKey = "mW6oS7yH46JF5vmch";

const Email = () => {
  const [emails, setEmails] = useState([]);
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
    window.alert("Email sent");
  };

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
    <div className="email-container">
      <div className="email-form-container">
        <form ref={form} className="email-form" onSubmit={handleEmailSubmit}>
          <input type="text" placeholder="Name" required name="name" />
          <input type="email" placeholder="Your email" required name="email" />
          <input type="text" placeholder="Subject" required name="subject" />
          <textarea
            placeholder="Describe your issue"
            required
            name="emailBody"
          ></textarea>
          <input type="file" placeholder="Attach a file" />
          <button type="submit" className="email-submit-button">
            Send
          </button>
        </form>
      </div>
      <div className="email-view-container">
        {emails ? (
          emails.map((email) => (
            <div key={email._id} className="single-email">
              <p>
                FROM: {email.name} - {email.emailAddress}
              </p>
              <p>ABOUT: {email.subject}</p>
              <p>{email.body}</p>
            </div>
          ))
        ) : (
          <div className="single-email">No emails to display</div>
        )}
      </div>
    </div>
  );
};

export default Email;
