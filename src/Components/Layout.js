// Layout.js
import React from "react";
import TopNavigation from "./TopNavigation";

const Layout = ({ children }) => {
  return (
    <div>
      <TopNavigation />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
