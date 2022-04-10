import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import NewProject from "./modals/NewProject";

type Props = {};

function ModalManager({}: Props): ReactElement {
  const activeModal = useSelector(
    (state: any) => state.app.modalManager.state.activeModal
  );

  switch (activeModal) {
    case "dashboard-new-project":
      return <NewProject />;

    default:
      return <></>;
  }
}

export default ModalManager;
