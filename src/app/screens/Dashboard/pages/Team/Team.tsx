import "./team.scss";

import React, { useEffect, useState } from "react";

import AffiliateProgram from "./components/AffiliateProgram";
import FileBrowser from "./components/FileBrowser";

import { useParams } from "react-router-dom";
import { Loading } from "@frapy/ui-kit";

type Props = {};

function Team({}: Props) {
  const { team } = useParams();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [team]);

  return (
    <div className="team-container">
      {loading ? (
        <Loading />
      ) : (
        <div className="team-wrapper">
          <AffiliateProgram />
          <FileBrowser />
        </div>
      )}
    </div>
  );
}

export default Team;
