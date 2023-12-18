import React from "react";

import "./HomeCard.css";

function HomeCard({ heading, content, onClick, icon }) {
  return (
    <div className="card">
      <div className="feature" onClick={onClick}>
        <div className="feature_right">
          <h3 className="feature_heading">{heading}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="feature_description">{content}</p>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
