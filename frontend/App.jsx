import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginUser from "./components/LoginUser";
import LoginAgent from "./components/LoginAgent";
import "./App.css"
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-user" element={<LoginUser />} />
          <Route path="/login-agent" element={<LoginAgent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
