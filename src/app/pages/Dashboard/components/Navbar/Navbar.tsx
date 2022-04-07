import "./navbar.scss";

import React from "react";

import { Navbar as NavbarComponent, Logo, AppSelector } from "@frapy/ui-kit";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar-container">
      <NavbarComponent leftItems={<AppSelector />} />
    </div>
  );
}

export default Navbar;
