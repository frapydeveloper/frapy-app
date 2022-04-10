import "./navbar.scss";

import React from "react";

import {
  Navbar as NavbarComponent,
  AppSelector,
  SearchBox,
  Logo,
  Button,
} from "@frapy/ui-kit";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../../../../../core/redux/actions/modalManagerActions";
import { clearForm } from "../../redux/actions/formManagerActions";

type Props = {};

function Navbar({}: Props) {
  const dispatch = useDispatch();

  return (
    <div className="navbar-container">
      <NavbarComponent
        type="fluid"
        leftItems={
          <>
            <Logo application="frapy" type="full" size={32} variant="dark" />
          </>
        }
        rightItems={
          <>
            <Button
              kind="tertiary"
              onClick={() => {
                dispatch(clearForm());
                dispatch(setModal());
              }}
            >
              Go Back
            </Button>
          </>
        }
      />
    </div>
  );
}

export default Navbar;
