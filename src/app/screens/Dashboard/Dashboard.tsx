import "./dashboard.scss";

import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="dashboard-container">
      <div className="app-container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
