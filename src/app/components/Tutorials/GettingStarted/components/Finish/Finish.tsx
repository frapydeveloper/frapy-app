import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { finishTutorial } from "../../../redux/actions/tutorialActions";

type Props = {};

function Finish({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(finishTutorial());
  }, []);

  return <></>;
}

export default Finish;
