import React from "react";

import { Button, Card, Divider, Logo, Stack, Typography } from "@frapy/ui-kit";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {};

function Activation({}: Props) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const userId: string = searchParams.get("userId") ?? "";
  const activationToken: string = searchParams.get("activationToken") ?? "";

  const success: boolean = false;

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
                  src="https://static.frapy.co/assets/illustration/verified-animate.svg"
                  height="350"
                />
              </Stack>
              <Stack margin={[16, 0]} alignItem="center">
                <Typography type="h5">Account Verification</Typography>
              </Stack>

              <Stack rowGap={16} alignItem="center">
                <Typography type="body4" textAlign="center">
                  Yaayy! Thanks for registering an account with Frapy. You are
                  the coolest person in all the world!
                </Typography>
                <Typography type="body4" textAlign="center">
                  Your account verification was successful! Let's get started!
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
                <Typography type="h5">Account Verification</Typography>
              </Stack>
              <Stack rowGap={16} alignItem="center">
                <Typography type="body4" textAlign="center">
                  Oops! Verification link may expired, or account already
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

export default Activation;
