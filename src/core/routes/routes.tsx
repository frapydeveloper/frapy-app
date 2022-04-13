import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../../app/screens/Dashboard";
import Home from "../../app/screens/Dashboard/pages/Home";
import Team from "../../app/screens/Dashboard/pages/Team";
import Project from "../../app/screens/Project";
import SignIn from "../../app/screens/SignIn";
import ModalManager from "../../app/screens/Dashboard/modalManager";
import ResetPassword from "../../app/screens/ResetPassword";

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
      {
        path: "profile",
        exact: true,
        element: <div>Profile page</div>,
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
      { path: "", element: <Navigate to="/sign-in" /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <div>Sign up</div> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "recovery", element: <div>Recover</div> },
      { path: "verification", element: <div>Verification</div> },
    ],
  },
];
