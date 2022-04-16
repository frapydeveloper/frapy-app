import React from "react";

import {
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Logo,
  Stack,
  Typography,
} from "@frapy/ui-kit";
import { useNavigate } from "react-router-dom";

type Props = {};

function SignUpForm({}: Props) {
  const navigate = useNavigate();

  return (
    <Stack>
      <Stack margin={[0, 0, 16, 0]} alignItem="center">
        <Logo application="frapy" type="full" size={42} />
      </Stack>
      <Card width={360}>
        <Stack padding={[24, 32]}>
          <Stack margin={[16, 0]} alignItem="center">
            <Typography type="h5">Create new account</Typography>
          </Stack>
          <Stack rowGap={16} alignItem="center">
            <Input type="text" labelText="Email" fullWidth />
            <Input type="text" labelText="Username" fullWidth />
            <Input type="text" labelText="Password" fullWidth />
            <Input type="text" labelText="Confirm password" fullWidth />
            <Stack rowGap={16} margin={[16, 0]} alignItem="flex-start">
              <Checkbox labelText="Yes! Send me news and offers from Frapy about products, events, and more." />
              <Typography type="body4">
                <>
                  By signing up, I accept the Frapy{" "}
                  <a href="https://google.com">Terms of Service</a> and
                  acknowledge the{" "}
                  <a href="https://google.com">Privacy Policy</a>.
                </>
              </Typography>
            </Stack>
            <Button fullWidth>Create Account</Button>
            <Typography type="subhead4">OR</Typography>
            <Button
              color="secondary"
              kind="tertiary"
              renderIcon={
                <img
                  src="https://static.frapy.co/assets/social-media/google-logo.svg"
                  height={16}
                />
              }
              fullWidth
            >
              Continue with Google
            </Button>
          </Stack>
          <Stack margin={[16, 0]}>
            <Divider />
          </Stack>
          <Stack margin={[8, 0, 0, 0]} direction="row" justifyContent="center">
            <Button kind="link" onClick={() => navigate("/")}>
              Sign in instead?
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}

export default SignUpForm;
