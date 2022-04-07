import "./app.scss";

import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./core/routes";

type Props = {};

function App({}: Props) {
  const isLoggedIn: string = localStorage.getItem("token") ?? "";

  const routing = useRoutes(routes(isLoggedIn !== ""));

  return <div className="frapy-app">{routing}</div>;
}

export default App;
