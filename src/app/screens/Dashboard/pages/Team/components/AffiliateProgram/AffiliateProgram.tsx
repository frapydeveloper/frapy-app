import "./affiliate-program.scss";

import React from "react";
import { Button, Card, Typography } from "@frapy/ui-kit";

type Props = {};

function AffiliateProgram({}: Props) {
  return (
    <Card
      padding={[16, 32]}
      backgroundStyle="linear"
      primaryColor="#0162FF"
      secondaryColor="#8800FC"
      direction="to right bottom"
      fullWidth
    >
      <div className="affiliate-program-container">
        <Typography type="h4">Get a forever FREE access</Typography>
        <Typography type="subhead2">
          Invite 5 member and get a forever FREE licence.
        </Typography>
        <Button color="primary">Copy invitation</Button>
      </div>
    </Card>
  );
}

export default AffiliateProgram;
