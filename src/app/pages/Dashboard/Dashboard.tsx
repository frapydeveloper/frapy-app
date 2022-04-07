import "./dashboard.scss";

import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Browser from "./components/Browser";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <Browser />
      </div>
    </div>
  );
}

export default Dashboard;
