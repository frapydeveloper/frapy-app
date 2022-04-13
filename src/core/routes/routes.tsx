import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../../app/screens/Dashboard";
import Home from "../../app/screens/Dashboard/pages/Home";
import Team from "../../app/screens/Dashboard/pages/Team";
import Project from "../../app/screens/Project";
import SignIn from "../../app/screens/SignIn";
import ModalManager from "../../app/screens/Dashboard/modalManager";
import ResetPassword from "../../app/screens/ResetPassword";
import Activation from "../../app/screens/Verifications/Activation";
import EmailChange from "../../app/screens/Verifications/EmailChange";
import Recovery from "../../app/screens/Verifications/Recovery";
import Termination from "../../app/screens/Verifications/Termination";
import SignUp from "../../app/screens/SignUp";

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
      { path: "sign-up", element: <SignUp /> },
      { path: "reset-password", element: <ResetPassword /> },
      {
        path: "verification",
        element: <Outlet />,
        children: [
          {
            path: "activation",
            exact: true,
            element: <Activation />,
          },
          {
            path: "email-change",
            exact: true,
            element: <EmailChange />,
          },
          {
            path: "recovery",
            exact: true,
            element: <Recovery />,
          },
          {
            path: "termination",
            exact: true,
            element: <Termination />,
          },
        ],
      },
    ],
  },
];
