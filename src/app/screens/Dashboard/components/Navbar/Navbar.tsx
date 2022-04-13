import "./navbar.scss";

import React from "react";

import {
  Navbar as NavbarComponent,
  AppSelector,
  SearchBox,
  Avatar,
} from "@frapy/ui-kit";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="dashboard-navbar-container">
      <NavbarComponent
        leftItems={
          <>
            <AppSelector />
            <SearchBox placeholder="Search for project or team" />
          </>
        }
        rightItems={<Avatar name="John Hall" size="md" />}
      />
    </div>
  );
}

export default Navbar;
