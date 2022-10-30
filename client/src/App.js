import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FormUsers from "./components/users/FormUsers";
import Footer from "./components/nav & footer/Footer";
import Navbar from "./components/nav & footer/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
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
