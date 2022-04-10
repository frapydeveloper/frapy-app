import React, { useState } from "react";
import { Button, Input, Typography } from "@frapy/ui-kit";
import { Edit } from "@frapy/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setStep,
} from "../../../../redux/actions/formManagerActions";
import SelectAnswer from "../../components/SelectAnswer";
import TECHNOLOGY_STACK from "../../../../../../../../../../core/config";

interface IRequiredProps {
  questionIndex: number;
}

interface IOptionalProps {}

interface IProps extends IRequiredProps, IOptionalProps {}

function TechnologyStack({ questionIndex }: IProps) {
  const dispatch = useDispatch();

  const formManager = useSelector(
    (state: any) => state.app.modalManager.newProjectForm
  );

  const [projectName, setProjectName] = useState<string>("");

  return (
    <div className="form-question-container">
      {formManager.currentStep !== questionIndex && (
        <div className="form-question-preview">
          <Typography type="menu1">
            Project Name: {formManager.answers[questionIndex]}
          </Typography>

          <Button
            kind="ghost"
            renderIcon={<Edit size={16} />}
            hasIconOnly
            onClick={() => dispatch(setStep(questionIndex))}
          />
        </div>
      )}
      {formManager.currentStep === questionIndex && (
        <div className="form-question-wrapper">
          <Typography type="menu1">Technology Stack</Typography>

          <div className="answers-wrapper">
            {TECHNOLOGY_STACK}
            <SelectAnswer icon="typescript" labelText="TypeScript" />
            <SelectAnswer icon="javascript" labelText="JavaScript" />
            <SelectAnswer icon="dotnet" labelText=".NET" disabled />
          </div>
        </div>
      )}
    </div>
  );
}

export default TechnologyStack;
