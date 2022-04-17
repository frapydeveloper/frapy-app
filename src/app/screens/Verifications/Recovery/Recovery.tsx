import React from "react";

import { Button, Card, Input, Logo, Stack, Typography } from "@frapy/ui-kit";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {};

function Recovery({}: Props) {
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
                  src="https://static.frapy.co/assets/illustration/reset-password-animate.svg"
                  height="350"
                />
              </Stack>
              <Stack margin={[16, 0]} alignItem="center">
                <Typography type="h5">Account Recovery</Typography>
              </Stack>

              <Stack rowGap={16} alignItem="center">
                <Input type="password" labelText="New password" fullWidth />
                <Input type="password" labelText="Confirm password" fullWidth />
              </Stack>
              <Stack margin={[32, 0, 16, 0]} rowGap={16} alignItem="center">
                <Button kind="normal">Reset Password</Button>
                <Button kind="link" onClick={() => navigate("/")}>
                  Return to sign in
                </Button>
              </Stack>
            </Stack>
          )}
          {!success && (
            <Stack padding={[24, 32]}>
              <Stack margin={[0, 0, 16, 0]} alignItem="center">
                <img
                  src="https://static.frapy.co/assets/illustration/forgot-password-animate.svg"
                  height="350"
                />
              </Stack>
              <Stack margin={[16, 0]} alignItem="center">
                <Typography type="h5">Account Recovery</Typography>
              </Stack>
              <Stack rowGap={16} alignItem="center">
                <Typography type="body3">
                  Oops! Account recovery link may expired, or already used.
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

export default Recovery;
