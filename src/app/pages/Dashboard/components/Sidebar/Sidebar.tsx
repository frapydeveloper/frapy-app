import "./sidebar.scss";

import React from "react";

import { Button, Sidenav, SidenavMenu, SidenavMenuItem } from "@frapy/ui-kit";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="sidebar-container">
      <Sidenav>
        <SidenavMenu labelText="Teams">
          <SidenavMenuItem>Team 1</SidenavMenuItem>
          <SidenavMenuItem>Team 2</SidenavMenuItem>
          <SidenavMenuItem>
            <Button kind="ghost">+ Create new team</Button>
          </SidenavMenuItem>
        </SidenavMenu>
        <SidenavMenu labelText="Shared with me">
          <SidenavMenuItem>No shared projects</SidenavMenuItem>
        </SidenavMenu>
      </Sidenav>
    </div>
  );
}

export default Sidebar;
