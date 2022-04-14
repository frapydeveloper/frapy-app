import { setModal } from "@core/redux/actions/modalManagerActions";
import { Input, Modal, Stack, Typography } from "@frapy/ui-kit";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

function NewTeam({}: Props) {
  const dispatch = useDispatch();

  return (
    <Modal
      modalHeading="New Team"
      onModalClose={() => dispatch(setModal())}
      primaryButtonText="Create team"
    >
      <Stack rowGap={8} fullWidth>
        <Stack>
          <Typography type="menu1">Name your team</Typography>
          <Typography type="body4">
            After creating a team, you can invite others to join.
          </Typography>
        </Stack>
        <Input type="text" labelText="Team name" fullWidth />
      </Stack>
    </Modal>
  );
}

export default NewTeam;
