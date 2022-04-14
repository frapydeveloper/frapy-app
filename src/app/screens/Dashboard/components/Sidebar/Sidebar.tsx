import "./sidebar.scss";

import React from "react";

import {
  Button,
  Divider,
  Sidenav,
  SidenavMenu,
  SidenavMenuItem,
} from "@frapy/ui-kit";
import { History } from "@frapy/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "@core/redux/actions/modalManagerActions";
import Team from "./components/Team";

type Props = {};

function Sidebar({}: Props) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div className="sidebar-container">
      <Sidenav>
        <SidenavMenuItem
          icon={<History size={20} />}
          onClick={() => navigate("/")}
        >
          Home
        </SidenavMenuItem>
        <Divider />
        <SidenavMenu labelText="Teams">
          <Team id="team-1" name="Team 1" />
          <Team id="team-2" name="Team 2" />
          <Team id="team-3" name="Team 3" />
          <SidenavMenuItem>
            <Button
              kind="link"
              onClick={() => dispatch(setModal("dashboard-new-team"))}
            >
              + Create new team
            </Button>
          </SidenavMenuItem>
        </SidenavMenu>
        {/* <SidenavMenu labelText="Shared with me">
          <SidenavMenuItem>No shared projects</SidenavMenuItem>
        </SidenavMenu> */}
      </Sidenav>
    </div>
  );
}

export default Sidebar;
