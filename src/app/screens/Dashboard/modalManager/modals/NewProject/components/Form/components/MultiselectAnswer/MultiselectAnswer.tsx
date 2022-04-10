import React, { useState } from "react";
import { Button, Input, Typography } from "@frapy/ui-kit";
import { Edit } from "@frapy/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setStep,
} from "../../../../redux/actions/formManagerActions";

interface IRequiredProps {
  questionIndex: number;
}

interface IOptionalProps {}

interface IProps extends IRequiredProps, IOptionalProps {}

function MultiselectAnswer({ questionIndex }: IProps) {
  return <div className="form-question-multiselect-answer-container"></div>;
}

export default MultiselectAnswer;
