import React from "react";

import { Button, Card, Stack, Typography } from "@frapy/ui-kit";
import { useDispatch } from "react-redux";
import { finishTutorial } from "../../../redux/actions/tutorialActions";

interface IRequiredProps {
  nextStep: Function;
}
interface IOptionalProps {}
interface IProps extends IRequiredProps, IOptionalProps {}

function TeamCreated({ nextStep }: IProps) {
  const dispatch = useDispatch();

  return (
    <Card width={600}>
      <Stack padding={[32]} alignItem="center">
        <Stack margin={[0, 0, 16, 0]} alignItem="center">
          <img
            src="https://static.frapy.co/assets/illustration/website-setup-animate.svg"
            height="500"
          />
        </Stack>
        <Stack margin={[16, 0]} alignItem="center">
          <Typography type="h5">Team Created</Typography>
        </Stack>

        <Stack rowGap={0} alignItem="center">
          <Typography type="body4" textAlign="center">
            Yaayy! You've created your first Frapy team.
          </Typography>
          <Typography type="body4" textAlign="center">
            You are the best! Let's check our team!
          </Typography>
        </Stack>
        <Stack margin={[24, 0]} alignItem="center">
          <Button kind="normal" onClick={() => nextStep()}>
            Enter Team
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

export default TeamCreated;
