import React from "react";

import { Button, Card, Logo, Stack, Typography } from "@frapy/ui-kit";
import { useNavigate } from "react-router-dom";

type Props = {};

function ActivationFailed({}: Props) {
  const navigate = useNavigate();

  return (
    <Stack>
      <Stack margin={[32, 0]} alignItem="center">
        <Logo application="frapy" type="full" size={42} />
      </Stack>
      <Card width={360}>
        <Stack padding={[24, 32]}>
          <Stack margin={[0, 0, 16, 0]} alignItem="center">
            <img
              src="https://static.frapy.co/assets/illustration/missed-chances-animate.svg"
              height="350"
            />
          </Stack>
          <Stack margin={[16, 0]} alignItem="center">
            <Typography type="h5">Account Verification</Typography>
          </Stack>
          <Stack rowGap={16} alignItem="center">
            <Typography type="body4" textAlign="center">
              Oops! Verification link may expired, or account already verified.
            </Typography>
          </Stack>
          <Stack margin={[24, 0]} alignItem="center">
            <Button kind="link" onClick={() => navigate("/")}>
              Return to Sign In
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}

export default ActivationFailed;
