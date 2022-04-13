import React from "react";

import { Stack } from "@frapy/ui-kit";
import { useSearchParams } from "react-router-dom";

type Props = {};

function Activation({}: Props) {
  const [searchParams] = useSearchParams();

  const userId: string = searchParams.get("userId") ?? "";
  const activationToken: string = searchParams.get("activationToken") ?? "";

  return <Stack>{"A: " + userId + "B: " + activationToken}</Stack>;
}

export default Activation;
