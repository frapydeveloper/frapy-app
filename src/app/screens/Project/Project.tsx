import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

function Project({}: Props) {
  const { file } = useParams();

  return <div>Project page: {file}</div>;
}

export default Project;
