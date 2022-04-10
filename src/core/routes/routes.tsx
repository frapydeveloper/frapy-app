import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../../app/screens/Dashboard";
import Home from "../../app/screens/Dashboard/pages/Home";
import Team from "../../app/screens/Dashboard/pages/Team";
import Project from "../../app/screens/Project";
import SignIn from "../../app/screens/SignIn";
import ModalManager from "../../app/screens/Dashboard/modalManager";

export const routes = (isLoggedIn: boolean) => [
  {
    path: "/",
    element: isLoggedIn ? (
      <>
        <Outlet />
      </>
    ) : (
      <Navigate to="/sign-in" />
    ),
    children: [
      {
        path: "",
        element: (
          <>
            <ModalManager />
            <Dashboard />
          </>
        ),
        children: [
          {
            path: "",
            exact: true,
            element: <Home />,
          },
          {
            path: "team/:team",
            exact: true,
            element: <Team />,
          },
        ],
      },
      {
        path: "team/:team/file/:file",
        exact: true,
        element: <Project />,
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
