import React from "react";

import { Button, Stack, Typography } from "@frapy/ui-kit";

interface IRequiredProps {
  nextStep: Function;
}
interface IOptionalProps {}
interface IProps extends IRequiredProps, IOptionalProps {}

function Intro({ nextStep }: IProps) {
  return (
    <Stack rowGap={32} margin={[16, 0]} alignItem="center">
      <Typography type="h2">Are you ready to start?</Typography>
      <Button size="md" onClick={() => nextStep()}>
        <Typography type="body3">Let's Go</Typography>
      </Button>
    </Stack>
  );
}

export default Intro;
