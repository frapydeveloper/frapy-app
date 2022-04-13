import "./sign-in.scss";

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

function SignIn({}: Props) {
  return (
    <div className="sign-in-container">
      <div className="logo-wrapper">
        <Logo application="frapy" type="full" size={42} />
      </div>
      <Card>
        <Stack padding={[24, 32]}>
          <div className="sign-in-panel-wrapper">
            <div className="panel-head">
              <Typography type="h5">Sign in to your account</Typography>
            </div>

            <div className="panel-body">
              <Input type="text" placeholder="Your email" hideLabel fullWidth />
              <Button fullWidth>Continue</Button>
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
              <Divider />
            </div>
            <div className="panel-footer">
              <Button kind="ghost">Can't login?</Button>
              <Button kind="ghost">Sign up for new user?</Button>
            </div>
          </div>
        </Stack>
      </Card>
      <div className="sign-in-footer">
        <Button color="secondary" kind="ghost">
          Privacy policy
        </Button>
        <Button color="secondary" kind="ghost">
          Terms of use
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
