import "./select-answer.scss";

import React from "react";
import { Typography } from "@frapy/ui-kit";

interface IRequiredProps {
  icon: string;
  labelText: string;
}

interface IOptionalProps {
  description?: string;
  onClick?: Function;
  disabled?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function SelectAnswer({
  icon,
  labelText,
  description,
  onClick,
  disabled = false,
}: IProps) {
  return (
    <div
      className={`form-question-select-answer-container ${
        disabled && "disabled"
      }`}
      onClick={() => !disabled && onClick && onClick()}
    >
      <div className="icon-wrapper">
        <img
          src={`https://static.frapy.co/assets/brand/${icon}.svg`}
          width={32}
          height={32}
          alt="select-answer-icon"
        />
      </div>
      <div className="select-answer-details">
        <Typography type="subhead3">{labelText}</Typography>
        {description && <Typography type="subhead4">{description}</Typography>}
        {disabled && <Typography type="subhead4">(Coming soon)</Typography>}
      </div>
    </div>
  );
}

export default SelectAnswer;
