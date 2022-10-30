import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import LogOut from "./components/users/LogOut";
import FormUsers from "./components/users/FormUsers";
import Footer from "./components/nav & footer/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FormUsers>Register</FormUsers>} />
        <Route path="/login" element={<FormUsers>Login</FormUsers>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
