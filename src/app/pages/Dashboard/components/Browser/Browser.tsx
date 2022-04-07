import "./browser.scss";

import React from "react";
import AffiliateProgram from "./components/AffiliateProgram";

type Props = {};

function Browser({}: Props) {
  return (
    <div className="browser-container">
      <div className="file-browser-container">
        <AffiliateProgram />
      </div>
    </div>
  );
}

export default Browser;
