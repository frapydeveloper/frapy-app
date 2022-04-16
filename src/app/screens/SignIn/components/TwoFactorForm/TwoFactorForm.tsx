import React, { useState } from "react";

import {
  Button,
  Card,
  Divider,
  Input,
  Logo,
  PinInput,
  Stack,
  Typography,
} from "@frapy/ui-kit";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "@core/redux/actions/screenManagerActions";
import { frapyClient } from "@core/api";
import { useNavigate } from "react-router-dom";
import { clearCredentials } from "../../redux/actions/signInActions";

type Props = {};

function TwoFactorForm({}: Props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signInData = useSelector((state: any) => state.screenData.signIn);

  const [errorMessage, setErrorMessage] = useState<string>();

  const signInVia2FA = async ({ otpCode }: { otpCode: string }) => {
    try {
      const result = await frapyClient.auth.signIn({
        dto: {
          credentials: {
            email: signInData.email,
            password: signInData.password,
            otpCode,
          },
        },
      });
      if (result.status === 200) {
        navigate("/");
        dispatch(clearCredentials());
      }
    } catch (error: any) {
      switch (error.response.data.error.code) {
        case 302:
          setErrorMessage("Invalid One-Time-Password.");
          break;

        default:
          setErrorMessage("Something went wrong.");
          break;
      }
    }
  };

  return (
    <Stack>
      <Stack margin={[0, 0, 16, 0]} alignItem="center">
        <Logo application="frapy" type="full" size={42} />
      </Stack>
      <Card width={360}>
        <Stack padding={[24, 32]}>
          <Stack margin={[0, 0, 16, 0]} alignItem="center">
            <img
              src="https://static.frapy.co/assets/illustration/two-factor-authentication-animate.svg"
              height="350"
            />
          </Stack>
          <Stack margin={[16, 0]} alignItem="center">
            <Typography type="h5">Two Factor Verification</Typography>
            <Typography type="body4" textAlign="center">
              To complete the sign in, enter the Google Authenticator
              On-Time-Password.
            </Typography>
          </Stack>
          <Stack rowGap={16} alignItem="center">
            <PinInput
              digits={6}
              onFilled={({ pin }: { pin: string }) =>
                signInVia2FA({ otpCode: pin })
              }
            />
            <>
              {errorMessage && (
                <motion.div
                  key={errorMessage}
                  initial={{ opacity: 0, width: "100%" }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0 }}
                >
                  <Typography type="menu2">{errorMessage}</Typography>
                </motion.div>
              )}
            </>
          </Stack>
          <Stack margin={[16, 0]}>
            <Divider />
          </Stack>
          <Stack margin={[8, 0, 0, 0]} direction="row" justifyContent="center">
            <Button kind="link" onClick={() => dispatch(setScreen("sign-in"))}>
              Back to sign in
            </Button>
          </Stack>
        </Stack>
      </Card>
      <Stack margin={[16, 0]} direction="row" justifyContent="center">
        <Button color="secondary" kind="ghost">
          Privacy policy
        </Button>
        <Button color="secondary" kind="ghost">
          Terms of use
        </Button>
      </Stack>
    </Stack>
  );
}

export default TwoFactorForm;
