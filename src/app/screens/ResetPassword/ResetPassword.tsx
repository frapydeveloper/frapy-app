import "./reset-password.scss";

import React from "react";
import { Button, Card, Divider, Input, Logo, Typography } from "@frapy/ui-kit";

type Props = {};

function ResetPassword({}: Props) {
  return (
    <div className="reset-password-container">
      <div className="logo-wrapper">
        <Logo application="frapy" type="full" size={42} />
      </div>
      <Card padding={[24, 32]}>
        <div className="reset-password-panel-wrapper">
          <div className="panel-head">
            <Typography type="h5">Can't login?</Typography>
          </div>
          <Typography type="subhead3">
            We will send you a recovery link
          </Typography>

          <div className="panel-body">
            <Input
              type="text"
              placeholder="Enter your email"
              hideLabel
              fullWidth
            />
            <Button fullWidth>Send recovery link</Button>
          </div>
          <div className="panel-footer">
            <Button kind="ghost">Return to login</Button>
          </div>
        </div>
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

export default ResetPassword;
