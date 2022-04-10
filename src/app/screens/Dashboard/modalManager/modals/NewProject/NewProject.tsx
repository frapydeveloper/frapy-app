import "./new-project.scss";

import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

type Props = {};

function NewProject({}: Props) {
  return (
    <div className="new-project-container">
      <Navbar />
      <div className="new-project-form">
        <Form />
      </div>
    </div>
  );
}

export default NewProject;
