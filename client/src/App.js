import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>Whats brewin ®</footer>
    </Router>
  );
};

export default App;
