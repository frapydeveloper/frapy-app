import "./file-browser.scss";

import React from "react";

import { Button, Card, Project, Typography } from "@frapy/ui-kit";
import { Add, LinearScale } from "@frapy/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../../../../core/redux/actions/modalManagerActions";

type Props = {};

function Browser({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card padding={[16, 32]} fullWidth>
      <div className="file-browser-container">
        <div className="header-wrapper">
          <div className="team-details">
            <Typography type="h4">MyTeam</Typography>
            <div className="team-info">
              <Typography type="subhead3">Free Plan</Typography>
              <Typography type="subhead3">|</Typography>
              <Typography type="subhead4">4 of 3 project used</Typography>
            </div>
          </div>
          <div className="action-buttons">
            <Button
              renderIcon={<Add size={16} color="#ffffff" />}
              onClick={() => dispatch(setModal("dashboard-new-project"))}
            >
              Create Project
            </Button>
          </div>
        </div>
        <div className="projects-wrapper grid">
          <Project
            labelText="New Project"
            createdAt="01-01-2022"
            icon={<LinearScale size={24} color="#007bff" />}
            onClick={() => navigate("file/12345678")}
            fullWidth
          />
          <Project
            labelText="New Project"
            createdAt="01-01-2022"
            icon={<LinearScale size={24} color="#007bff" />}
            onClick={() => navigate("file/12345678")}
            fullWidth
          />
          <Project
            labelText="New Project"
            createdAt="01-01-2022"
            icon={<LinearScale size={24} color="#007bff" />}
            onClick={() => navigate("file/12345678")}
            fullWidth
          />
          <Project
            labelText="New Project"
            createdAt="01-01-2022"
            icon={<LinearScale size={24} color="#007bff" />}
            onClick={() => navigate("file/12345678")}
            fullWidth
          />
        </div>
      </div>
    </Card>
  );
}

export default Browser;
