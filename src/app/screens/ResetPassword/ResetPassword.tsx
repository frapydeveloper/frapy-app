import "./reset-password.scss";

import React from "react";
import {
  Button,
  Card,
  Divider,
  Input,
  Logo,
  Stack,
  Typography,
} from "@frapy/ui-kit";

type Props = {};

function ResetPassword({}: Props) {
  return (
    <Stack
      alignItem="center"
      justifyContent="center"
      styles={{ backgroundColor: "#fafafb" }}
    >
      <Stack margin={[0, 0, 16, 0]} alignItem="center">
        <Logo application="frapy" type="full" size={42} />
      </Stack>

      <Card padding={[24, 32]}>
        <Stack>
          <Stack margin={[16, 0]} alignItem="center">
            <Typography type="h5">Can't login?</Typography>
          </Stack>
          <Stack margin={[16, 0]} alignItem="center">
            <Typography type="subhead3">
              We will send you a recovery link
            </Typography>
          </Stack>

          <Stack rowGap={16}>
            <Input
              type="text"
              placeholder="Enter your email"
              hideLabel
              fullWidth
            />
            <Button fullWidth>Send recovery link</Button>
          </Stack>

          <Stack margin={[8, 0, 0, 0]}>
            <Button kind="ghost">Return to login</Button>
          </Stack>
        </Stack>
      </Card>
      <Stack margin={[16, 0]} direction="row" justifyContent="center">
        <Button color="secondary" kind="ghost">
          Privacy policy
        </Button>
        <Button color="secondary" kind="ghost">
          Terms of use
        </Button>
      </Stack>
    </Stack>
  );
}

export default ResetPassword;
