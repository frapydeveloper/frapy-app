import React from "react";

import { Avatar, OverflowMenu, OverflowMenuItem } from "@frapy/ui-kit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

type Props = {};

function Account({}: Props) {
  const navigate = useNavigate();

  const account = useSelector((state: any) => state.account);

  const signOut = () => {
    localStorage.removeItem("access-token");
    window.location.reload();
  };

  return (
    <OverflowMenu
      invokeItem={
        <Avatar
          name={(account?.firstName ?? "") + " " + (account?.lastName ?? "")}
          size="md"
        />
      }
      flipped
    >
      <OverflowMenuItem onClick={() => navigate("profile")}>
        Profile
      </OverflowMenuItem>
      <OverflowMenuItem onClick={() => signOut()}>Logout</OverflowMenuItem>
    </OverflowMenu>
  );
}

export default Account;
