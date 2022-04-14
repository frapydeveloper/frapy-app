import React from "react";

import { Button, Card, Project, Stack, Typography } from "@frapy/ui-kit";
import { Add, LinearScale } from "@frapy/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../../../../core/redux/actions/modalManagerActions";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@frapy/ui-kit";

type Props = {};

function Browser({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <ContextMenu id="project-trigger">
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenu>
      <Card fullWidth>
        <Stack padding={[16, 32]}>
          <Stack rowGap={16}>
            <Stack direction="row" justifyContent="space-between">
              <Stack fullWidth={false}>
                <Typography type="h4">MyTeam</Typography>
                <Stack
                  direction="row"
                  columnGap={8}
                  alignItem="center"
                  fullWidth
                >
                  <Typography type="subhead3">Free Plan</Typography>
                  <Typography type="subhead3">|</Typography>
                  <Typography type="subhead4">1 of 3 project used</Typography>
                </Stack>
              </Stack>
              <Stack fullWidth={false}>
                <Button
                  renderIcon={<Add size={16} color="#ffffff" />}
                  onClick={() => dispatch(setModal("dashboard-new-project"))}
                >
                  Create Project
                </Button>
              </Stack>
            </Stack>
            <div className="projects-wrapper grid">
              <ContextMenuTrigger id="project-trigger">
                <Project
                  labelText="New Project"
                  createdAt="01-01-2022"
                  icon={<LinearScale size={24} color="#007bff" />}
                  onClick={() => navigate("file/12345678")}
                  fullWidth
                />
              </ContextMenuTrigger>
            </div>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default Browser;
