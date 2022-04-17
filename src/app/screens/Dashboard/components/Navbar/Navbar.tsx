import "./navbar.scss";

import React from "react";

import {
  Navbar as NavbarComponent,
  AppSelector,
  SearchBox,
  Logo,
} from "@frapy/ui-kit";
import { useNavigate } from "react-router-dom";
import Account from "./components/Account";

type Props = {};

function Navbar({}: Props) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-navbar-container">
      <NavbarComponent
        leftItems={
          <>
            <div className="app-logo-wrapper" onClick={() => navigate("/")}>
              <Logo application="frapy" type="full" variant="light" />
            </div>
            <SearchBox placeholder="Search for project or team" />
          </>
        }
        rightItems={<Account />}
      />
    </div>
  );
}

export default Navbar;
