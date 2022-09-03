import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import CustomerAuth from "./pages/CustomerAuth";
import AdminAuth from "./pages/AdminAuth";
import Messaging from "./pages/Messaging";
import Location from "./pages/Location";
import VideoDashboard from "./pages/VideoCall/VideoDashboard";
import { auth } from "./firebase-config";
import SupportAdmin from "./SupportAdmin";
import { signOut } from "firebase/auth";
import UserHome from "./pages/UserHome";
import CustomerEmail from "./pages/CustomerEmail";
import EmailConfirmation from "./pages/EmailConfirmation";
import AdminHome from "./pages/AdminHome";
import AdminEmail from "./pages/AdminEmail";
import ChatAI from "./components/ChatAI";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isUser, setIsUser] = useState(localStorage.getItem("isUser"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      setIsUser(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      {/* <nav>
        <Link to="/"> Home </Link>
        <Link to="/customerauth"> Customer Login </Link>
        <Link to="/adminauth"> Admin Login </Link>
        <Link to="/email"> Email </Link>
        <Link to="/messaging"> Messaging </Link>
        <Link to="/location"> Location </Link>
        <Link to="/videocall"> VideoCall </Link>
        {!isAuth ? (
          <></>
        ) : (
          <>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/customerauth"
          element={<CustomerAuth setIsAuth={setIsAuth} />}
        />
        <Route
          path="/adminauth"
          element={<AdminAuth setIsAuth={setIsAuth} />}
        />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/location" element={<Location />} />
        <Route path="/support" element={<SupportAdmin />} />
        <Route path="/videocall" element={<VideoDashboard />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/email-us" element={<CustomerEmail />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/admin-email-view" element={<AdminEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
