import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../../app/pages/Dashboard";
import SignIn from "../../app/pages/SignIn";

export const routes = (isLoggedIn: boolean) => [
  {
    path: "/",
    element: isLoggedIn ? (
      <>
        {/* NOTIFICATION MANAGER */}
        {/* MODAL MANAGER */}
        {/* NAVBAR */}
        {/* <Navbar leftItems={<Logo />} /> */}
        <Outlet />
      </>
    ) : (
      <Navigate to="/sign-in" />
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "",
            exact: true,
            element: <div>Home</div>,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? (
      <>
        <Outlet />
      </>
    ) : (
      <Navigate to="/" />
    ),
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "", element: <Navigate to="/sign-in" /> },
    ],
  },
];
