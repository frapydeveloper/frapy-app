import "./form.scss";

import React from "react";
import { Button, Typography } from "@frapy/ui-kit";
import { useSelector } from "react-redux";

import ProjectName from "./Questions/ProjectName";
import TechnologyStack from "./Questions/TechnologyStack";

type Props = {};

function Form({}: Props) {
  const formManager = useSelector(
    (state: any) => state.app.modalManager.newProjectForm
  );

  console.log(Object.keys(formManager.answers).length);

  return (
    <div className="new-project-form-container">
      <div className="form-header">
        <Typography type="h5">Create Project</Typography>
      </div>
      <div className="new-project-form-wrapper">
        <ProjectName questionIndex={0} />
        <TechnologyStack questionIndex={1} />
        <div className="action-buttons">
          <Button disabled={Object.keys(formManager.answers).length !== 1}>
            Create Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
