import React from "react";

import { Button, Card, Logo, Stack, Typography } from "@frapy/ui-kit";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {};

function Termination({}: Props) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const processId: string = searchParams.get("processId") ?? "";
  const verificationToken: string = searchParams.get("verificationToken") ?? "";

  const success: boolean = true;

  return (
    <Stack
      alignItem="center"
      padding={[50]}
      styles={{ backgroundColor: "#fafafb" }}
      fullHeight
    >
      <Stack margin={[32, 0]} alignItem="center">
        <Logo application="frapy" type="full" size={42} />
      </Stack>

      <Card width={360}>
        <>
          {success && (
            <Stack padding={[32, 32]}>
              <Stack margin={[0, 0, 16, 0]} alignItem="center">
                <img
                  src="https://static.frapy.co/assets/illustration/iceberg-animate.svg"
                  height="350"
                />
              </Stack>
              <Stack margin={[16, 0]} alignItem="center">
                <Typography type="h5">Account Termination</Typography>
              </Stack>

              <Stack rowGap={16} alignItem="center">
                <Typography type="body4" textAlign="center">
                  Your account is successfully termination! We hope that this
                  isn't the end of our journey and we will see you soon!
                </Typography>
              </Stack>
              <Stack margin={[24, 0]} alignItem="center">
                <Button kind="normal" onClick={() => navigate("/")}>
                  Return to sign in
                </Button>
              </Stack>
            </Stack>
          )}
          {!success && (
            <Stack padding={[24, 32]}>
              <Stack margin={[0, 0, 16, 0]} alignItem="center">
                <img
                  src="https://static.frapy.co/assets/illustration/missed-chances-animate.svg"
                  height="350"
                />
              </Stack>
              <Stack margin={[16, 0]} alignItem="center">
                <Typography type="h5">Account Termination</Typography>
              </Stack>
              <Stack rowGap={16} alignItem="center">
                <Typography type="body4" textAlign="center">
                  Oops! Account termination link may expired, or account already
                  verified.
                </Typography>
              </Stack>
              <Stack margin={[24, 0]} alignItem="center">
                <Button kind="link" onClick={() => navigate("/")}>
                  Return to sign in
                </Button>
              </Stack>
            </Stack>
          )}
        </>
      </Card>
    </Stack>
  );
}

export default Termination;
