import "./affiliate-program.scss";

import React from "react";
import { Button, Card, Stack, Typography } from "@frapy/ui-kit";

type Props = {};

function AffiliateProgram({}: Props) {
  return (
    <Card
      backgroundStyle="linear"
      primaryColor="#0162FF"
      secondaryColor="#8800FC"
      direction="to right bottom"
      fullWidth
    >
      <Stack padding={[16, 32]}>
        <div className="affiliate-program-container">
          <Typography type="h4">Get a forever FREE access</Typography>
          <Typography type="subhead2">
            Invite 5 member and get a forever FREE licence.
          </Typography>
          <Button color="primary">Copy invitation</Button>
        </div>
      </Stack>
    </Card>
  );
}

export default AffiliateProgram;
