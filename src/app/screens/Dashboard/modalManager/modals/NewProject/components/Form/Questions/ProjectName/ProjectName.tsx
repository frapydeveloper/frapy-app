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

function ProjectName({ questionIndex }: IProps) {
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
          <Typography type="menu1">Project Name</Typography>

          <div className="answers-wrapper">
            <Input
              type="text"
              onChange={(event: string) => {
                setProjectName(event);
                dispatch(setAnswer(event));
              }}
              hideLabel
            />
            <Button
              onClick={() => dispatch(setStep(questionIndex + 1))}
              disabled={projectName.length < 3}
            >
              Next step
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectName;
