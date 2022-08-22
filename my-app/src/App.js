import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import LandingPage from './pages/LandingPage';
import CustomerAuth from './pages/CustomerAuth';
import AdminAuth from './pages/AdminAuth';
import Email from './pages/Email';
import Messaging from './pages/Messaging';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <nav>
            <Link to="/"> Home </Link>
            <Link to="/customerauth"> Customer Login </Link>
            <Link to="/adminauth"> Admin Login </Link>
            <Link to="/email"> Email </Link>
            <Link to="/messaging"> Messaging </Link>
            <Link to="/location"> Location </Link>
    </nav>
      <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/customerauth" element={ <CustomerAuth /> } />
            <Route path="/adminauth" element={<AdminAuth  />} />
            <Route path="/email" element={<Email />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
);
}

export default App;
