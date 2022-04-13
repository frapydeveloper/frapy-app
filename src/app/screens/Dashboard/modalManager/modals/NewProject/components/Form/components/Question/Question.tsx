import "./question.scss";

import React, { ReactElement } from "react";
import {
  Button,
  Dropdown,
  Input,
  MultiSelect,
  Typography,
} from "@frapy/ui-kit";
import { useDispatch, useSelector } from "react-redux";

import { ARCHITECTURE, TECHNOLOGY_STACK, TTechStack } from "@core/config";
import { setAnswer } from "../../../../redux/actions/formManagerActions";

interface IRequiredProps {
  question: string;
  previousQuestion: string;
  questionKey: string;
  type: "text" | "number" | "select" | "multi-select";
}

interface IOptionalProps {
  selectableAnswers?: any[];
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Question({
  question,
  previousQuestion,
  questionKey,
  type,
  selectableAnswers = [],
}: IProps): ReactElement {
  const dispatch = useDispatch();

  const formManager = useSelector(
    (state: any) => state.app.modalManager.newProjectForm
  );

  const setQuestionType = () => {
    switch (type) {
      case "text":
        return (
          <Input
            type="text"
            onChange={(event: string) => {
              dispatch(setAnswer(questionKey, event));
            }}
            fullWidth
            hideLabel
          />
        );

      case "number":
        return (
          <Input
            type="number"
            onChange={(event: string) => {
              dispatch(setAnswer(questionKey, event));
            }}
            fullWidth
            hideLabel
          />
        );

      case "select":
        return (
          <Dropdown
            items={selectableAnswers}
            direction="bottom"
            itemToString={({ item }: { item: TTechStack }) => (
              <div className={`dropdown-item`}>
                <img src={item.icon} alt={item.name} width={16} height={16} />
                <div className="label">
                  {item?.name}
                  {item.disabled && (
                    <span className="coming-soon">(Coming soon)</span>
                  )}
                </div>
              </div>
            )}
            fullWidth
            size="sm"
            onChange={({ selectedItem }: any) =>
              dispatch(setAnswer(questionKey, selectedItem?.value))
            }
            disabled={
              previousQuestion
                ? !(previousQuestion in formManager.answers)
                : false
            }
          />
        );

      case "multi-select":
        return (
          <MultiSelect
            itemToString={({ item }: { item: TTechStack }) => (
              <div className={`dropdown-item`}>
                {console.log({ item })}
                <img src={item.icon} alt={item.name} width={16} height={16} />
                <div className="label">
                  {item?.name}
                  {item.disabled && (
                    <span className="coming-soon">(Coming soon)</span>
                  )}
                </div>
              </div>
            )}
            items={selectableAnswers}
            onChange={({ selectedItems }: any) =>
              dispatch(setAnswer(questionKey, selectedItems))
            }
            selectionKey="value"
            size="sm"
            fullWidth
            disabled={
              previousQuestion
                ? !(previousQuestion in formManager.answers)
                : false
            }
          />
        );

      default:
        break;
    }
  };

  return (
    <div className="form-question-wrapper">
      <Typography type="menu1">{question}</Typography>

      <div className="answers-wrapper">{setQuestionType()}</div>
    </div>
  );
}

export default Question;
