import "./navbar.scss";

import React from "react";

import {
  Navbar as NavbarComponent,
  AppSelector,
  SearchBox,
  Avatar,
  OverflowMenu,
  OverflowMenuItem,
} from "@frapy/ui-kit";
import { useNavigate } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-navbar-container">
      <NavbarComponent
        leftItems={
          <>
            <AppSelector />
            <SearchBox placeholder="Search for project or team" />
          </>
        }
        rightItems={
          <OverflowMenu
            invokeItem={<Avatar name="John Hall" size="md" />}
            flipped
          >
            <OverflowMenuItem onClick={() => navigate("profile")}>
              Profile
            </OverflowMenuItem>
            <OverflowMenuItem>Bills & Invoices</OverflowMenuItem>
            <OverflowMenuItem>Logout</OverflowMenuItem>
          </OverflowMenu>
        }
      />
    </div>
  );
}

export default Navbar;
