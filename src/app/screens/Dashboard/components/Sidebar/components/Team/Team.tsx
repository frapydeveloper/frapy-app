import React from "react";

import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
  SidenavMenuItem,
} from "@frapy/ui-kit";
import { useNavigate } from "react-router-dom";

interface IRequiredProps {
  id: string;
  name: string;
}

interface IOptionalProps {}

interface IProps extends IRequiredProps, IOptionalProps {}

function Team({ id, name }: IProps) {
  const navigate = useNavigate();

  return (
    <>
      <ContextMenu id="team-1">
        <ContextMenuItem onClick={() => navigate("/team/team-1")}>
          Open
        </ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenu>
      <ContextMenuTrigger id="team-1">
        <SidenavMenuItem onClick={() => navigate(`/team/${id}`)}>
          {name}
        </SidenavMenuItem>
      </ContextMenuTrigger>
    </>
  );
}

export default Team;
