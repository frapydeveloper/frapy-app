import React from "react";

import {
  Avatar,
  Button,
  Card,
  Divider,
  Input,
  OverflowMenu,
  OverflowMenuItem,
  Stack,
  Typography,
} from "@frapy/ui-kit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

type Props = {};

function Profile({}: Props) {
  const navigate = useNavigate();

  const account = useSelector((state: any) => state.account);

  return (
    <Stack
      padding={[50]}
      alignItem="center"
      justifyContent="flex-start"
      styles={{ backgroundColor: "#fafafb" }}
      direction="column"
      fullHeight
    >
      <Card width={800}>
        <Stack rowGap={16} padding={[32, 16, 16, 16]}>
          <Button kind="link" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Stack>
        <Stack rowGap={16} padding={[0, 32]}>
          <Typography type="h5">Profile Settings</Typography>
          <Stack direction="row" columnGap={32} alignItem="center">
            <OverflowMenu
              invokeItem={
                <Avatar
                  name={
                    (account?.firstName ?? "") + " " + (account?.lastName ?? "")
                  }
                  size="xlg"
                />
              }
              light
            >
              <OverflowMenuItem>Upload</OverflowMenuItem>
              <OverflowMenuItem>Remove</OverflowMenuItem>
            </OverflowMenu>
            <Stack rowGap={8}>
              <Typography type="menu1">Name</Typography>
              <Stack fullWidth direction="row" columnGap={16}>
                <Input
                  key="firstname-input"
                  type="text"
                  labelText="Firstname"
                  defaultValue={account?.firstName ?? ""}
                  fullWidth
                />
                <Input
                  key="lastname-input"
                  type="text"
                  labelText="Lastname"
                  defaultValue={account?.lastName ?? ""}
                  fullWidth
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItem="flex-end" fullWidth>
            <Button>Submit</Button>
          </Stack>
          <Divider />
          <Stack rowGap={8}>
            <Typography type="menu1">Email</Typography>
            <Stack>
              <Typography type="body4">
                We will send a validation message to your new email address.
              </Typography>
              <Typography type="body4">
                Please click the "Confirm email" button inside to complete the
                change.
              </Typography>
            </Stack>
            <Stack fullWidth direction="row" columnGap={16}>
              <Input type="text" labelText="New email" fullWidth />
              <Input type="password" labelText="Confirm Password" fullWidth />
            </Stack>
            <Stack alignItem="flex-end" fullWidth>
              <Button>Submit</Button>
            </Stack>
          </Stack>
          <Divider />
          <Stack rowGap={8}>
            <Typography type="menu1">Password</Typography>
            <Stack fullWidth direction="row" columnGap={16}>
              <Input type="text" labelText="Current Password" fullWidth />
              <Input type="password" labelText="New Password" fullWidth />
              <Input type="password" labelText="Confirm Password" fullWidth />
            </Stack>
            <Stack alignItem="flex-end" fullWidth>
              <Button>Save Password</Button>
            </Stack>
          </Stack>
          <Divider />
          <Stack rowGap={8}>
            <Typography type="menu1">Subscription Plan</Typography>
            <Stack rowGap={8} columnGap={16} fullWidth>
              <Typography type="body4">
                <>
                  Current Plan: <b>Free</b>
                </>
              </Typography>
              {/* <Typography type="body4">
                Upgrade plan for unlimited project files in teams.
              </Typography>
              <Button kind="tertiary">Upgrade</Button> */}
            </Stack>
          </Stack>
          <Divider />
          <Stack rowGap={8}>
            <Typography type="menu1">Account</Typography>
            <Button color="danger" kind="ghost">
              Delete Account
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}

export default Profile;
