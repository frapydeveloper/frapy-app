import React from "react";
import { useSelector } from "react-redux";
import GettingStarted from "./GettingStarted";

interface IRequiredProps {}
interface IOptionalProps {}
interface IProps extends IRequiredProps, IOptionalProps {}

function Tutorials({}: IProps) {
  const activeTutorial = useSelector(
    (state: any) => state.app.tutorialManager.active
  );

  switch (activeTutorial) {
    case "getting-started":
      return <GettingStarted />;

    default:
      return <></>;
  }
}

export default Tutorials;
