import "./affiliate-program.scss";

import React from "react";
import { Card, Typography } from "@frapy/ui-kit";

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
      </div>
    </Card>
  );
}

export default AffiliateProgram;
