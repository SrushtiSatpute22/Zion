import React, { useState } from "react";
import "./TopNavigation.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
function TopNavigation() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // Add logic here to handle the tab click event if needed
  };
  return (
    <div className="top-navigation">
      <div
        className={`nav-item ${activeTab === "Home" ? "active" : ""}`}
        onClick={() => handleTabClick("Home")}
      >
        Home
      </div>
      <div
        className={`nav-item ${activeTab === "About" ? "active" : ""}`}
        onClick={() => handleTabClick("About")}
      >
        About
      </div>
      <div
        className={`nav-item ${activeTab === "Contact" ? "active" : ""}`}
        onClick={() => handleTabClick("Contact")}
      >
        Contact
      </div>
    </div>
  );
}

export default TopNavigation;
