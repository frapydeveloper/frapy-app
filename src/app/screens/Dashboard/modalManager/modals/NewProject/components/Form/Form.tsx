import "./form.scss";

import React from "react";
import { Button, Dropdown, Input, Typography } from "@frapy/ui-kit";
import { useDispatch, useSelector } from "react-redux";

import {
  API_ARCHITECTURE,
  ARCHITECTURE,
  DATABASE,
  DATABASE_ORM,
  FRAMEWORK,
  TECHNOLOGY_STACK,
  TTechStack,
} from "@core/config";
import { setAnswer } from "../../redux/actions/formManagerActions";
import Question from "./components/Question";

type Props = {};

function Form({}: Props) {
  const dispatch = useDispatch();

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
        {/* <ProjectName questionIndex={0} /> */}
        {/* <TechnologyStack questionIndex={1} /> */}
        <div className="form-questions-wrapper">
          <Question
            question="Project Name"
            questionKey="name"
            type="text"
            previousQuestion=""
          />
          <Question
            question="Technology Stack"
            questionKey="tech-stack"
            type="select"
            selectableAnswers={TECHNOLOGY_STACK}
            previousQuestion="name"
          />
          <Question
            question="Architecture"
            questionKey="architecture"
            type="select"
            selectableAnswers={ARCHITECTURE}
            previousQuestion="tech-stack"
          />
          <Question
            question="Database"
            questionKey="database"
            type="select"
            selectableAnswers={DATABASE}
            previousQuestion="architecture"
          />
          <Question
            question="Database ORM"
            questionKey="database-orm"
            type="select"
            selectableAnswers={DATABASE_ORM}
            previousQuestion="database"
          />
          <Question
            question="API Architecture"
            questionKey="api-architecture"
            type="multi-select"
            selectableAnswers={API_ARCHITECTURE}
            previousQuestion="database-orm"
          />
          <Question
            question="Framework"
            questionKey="framework"
            type="select"
            selectableAnswers={FRAMEWORK}
            previousQuestion="api-architecture"
          />
        </div>
        <div className="action-buttons">
          <Button disabled={Object.keys(formManager.answers).length !== 7}>
            Create Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
