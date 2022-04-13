import React from "react";

import { Stack } from "@frapy/ui-kit";
import { useSearchParams } from "react-router-dom";

type Props = {};

function Recovery({}: Props) {
  const [searchParams] = useSearchParams();

  const processId: string = searchParams.get("processId") ?? "";
  const verificationToken: string = searchParams.get("verificationToken") ?? "";

  return <Stack>{"A: " + processId + "B: " + verificationToken}</Stack>;
}

export default Recovery;
