import "./navbar.scss";

import React from "react";

import {
  Navbar as NavbarComponent,
  AppSelector,
  SearchBox,
} from "@frapy/ui-kit";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar-container">
      <NavbarComponent
        leftItems={
          <>
            <AppSelector />
            <SearchBox placeholder="Search for project or team" />
          </>
        }
      />
    </div>
  );
}

export default Navbar;
