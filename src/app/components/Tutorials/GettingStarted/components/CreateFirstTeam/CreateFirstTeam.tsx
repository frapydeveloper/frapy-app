import React, { useState } from "react";

import { Button, Card, Input, Stack, Typography } from "@frapy/ui-kit";
import { frapyClient } from "@core/api";

interface IRequiredProps {
  nextStep: Function;
}
interface IOptionalProps {}
interface IProps extends IRequiredProps, IOptionalProps {}

function CreateFirstTeam({ nextStep }: IProps) {
  const [teamName, setTeamName] = useState<string>("");

  const [teamNameError, setTeamNameError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const createTeam = () => {
    if (checkTeamName()) {
      createTeamRequest();
    }
  };

  const checkTeamName = () => {
    if (teamName?.length >= 3) {
      setTeamNameError(false);
      return true;
    } else {
      setTeamNameError(true);
    }
  };

  const createTeamRequest = async () => {
    try {
      const result = await frapyClient.teams.create({
        dto: { name: teamName },
      });
      if (result.status === 201) {
        nextStep();
      }
    } catch (error) {
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <Card width={600}>
      <Stack padding={[32]} alignItem="center">
        <Typography type="h4" textAlign="center">
          Let's name your first Frapy team
        </Typography>
        <Stack rowGap={16} padding={[32, 64]} columnGap={16} alignItem="center">
          <Input
            type="text"
            onChange={(data: string) => setTeamName(data)}
            hideLabel
            showHint={teamNameError}
            hint="The team name is not accepted or empty."
            error={teamNameError}
            fullWidth
          />
          <Typography
            type="menu1"
            textAlign="center"
            colorStyle="solid"
            variant="danger"
          >
            {errorMessage}
          </Typography>
          {/* MUST CHANGE createTeam() */}
          <Button onClick={() => nextStep()}>Create Team</Button>
        </Stack>
      </Stack>
    </Card>
  );
}

export default CreateFirstTeam;
