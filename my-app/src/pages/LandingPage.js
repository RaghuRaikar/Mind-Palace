import React from "react";
import "../styleSheets/LandingPage.css";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/customerauth"> Customer Login </Link>
        <Link to="/adminauth"> Admin Login </Link>
        <Link to="/email"> Email </Link>
        <Link to="/messaging"> Messaging </Link>
        <Link to="/location"> Location </Link>
        <Link to="/videocall"> VideoCall </Link>
      </nav>
      <br></br>
      <div className="landing-buttons">
        <button onClick={() => navigate("./userhome")}>User View</button>
        <button onClick={() => navigate("./adminhome")}>Admin view</button>
        <br></br>
        <button onClick={() => navigate("./adminauth")}>
          Sign in as Admin
        </button>
        <button onClick={() => navigate("./customerauth")}>
          Sign in as User
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
