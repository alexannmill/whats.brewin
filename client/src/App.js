import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import LogOut from "./components/users/LogOut";
import FormUsers from "./components/users/FormUsers";

const App = () => {
  return (
    <Router>
      <nav className="flex space-x-32 space-y-4">
        <Link to="/">Whats brewin</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>

        <LogOut />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FormUsers>Register</FormUsers>} />
        <Route path="/login" element={<FormUsers>Login</FormUsers>} />
      </Routes>
      <footer>Whats brewin ®</footer>
    </Router>
  );
};

export default App;
