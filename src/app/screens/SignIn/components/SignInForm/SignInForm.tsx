import React, { useState } from "react";

import {
  Button,
  Card,
  Divider,
  Input,
  Logo,
  Stack,
  Typography,
} from "@frapy/ui-kit";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "@core/redux/actions/screenManagerActions";
import { frapyClient } from "@core/api";
import {
  clearCredentials,
  setEmail,
  setPassword,
} from "../../redux/actions/signInActions";
import { useNavigate } from "react-router-dom";

type Props = {};

function SignInForm({}: Props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signInData = useSelector((state: any) => state.screenData.signIn);

  const [step, setStep] = useState<number>(0);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email));
    return re.test(email);
  };

  const nextStep = () => {
    if (validateEmail(signInData?.email)) {
      setEmailError(false);
      setStep(1);
    } else {
      setEmailError(true);
    }
  };

  const signIn = () => {
    if (validateEmail(signInData?.email)) {
      setEmailError(false);
      if (signInData?.password?.length > 1) {
        setPasswordError(false);
        signInViaEmailRequest();
      } else {
        setPasswordError(true);
      }
    } else {
      setEmailError(true);
    }
  };

  const signInViaEmailRequest = async () => {
    try {
      const result = await frapyClient.auths.signIn({
        dto: {
          credentials: {
            email: signInData.email,
            password: signInData.password,
          },
        },
      });
      if (result.status === 200) {
        dispatch(clearCredentials());
        window.location.reload();
      }
    } catch (error: any) {
      switch (error.response.data.error.code) {
        case 7:
          setErrorMessage("Invalid input data.");
          break;
        case 300:
          setErrorMessage("That email and password combination is incorrect.");
          break;
        case 301:
          dispatch(setScreen("sign-in-2fa"));
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
          <Stack margin={[16, 0]} alignItem="center">
            <Typography type="h5">Sign in to your account</Typography>
          </Stack>
          <Stack rowGap={16} alignItem="center">
            <Input
              type="email"
              hideLabel
              placeholder="Your email"
              onChange={(data: string) => dispatch(setEmail(data))}
              showHint={emailError}
              hint="Email is not accepted or empty"
              error={emailError || errorMessage !== ""}
              defaultValue={signInData.email}
              fullWidth
            />
            <AnimatePresence exitBeforeEnter>
              {step === 0 && (
                <motion.div
                  key="sign-in-step-1"
                  initial={{ opacity: 1, width: "100%" }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0 }}
                  transition={{
                    default: { duration: 0.1 },
                  }}
                >
                  {/* <Stack rowGap={16}> */}
                  <Button fullWidth onClick={() => nextStep()}>
                    Continue
                  </Button>
                  {/* </Stack> */}
                </motion.div>
              )}
              {step === 1 && (
                <motion.div
                  key="sign-in-step-2"
                  initial={{ opacity: 0, width: "100%" }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0 }}
                  transition={{
                    default: { duration: 0.1 },
                  }}
                >
                  <Stack rowGap={16} alignItem="center">
                    <Input
                      type="password"
                      hideLabel
                      placeholder="Your password"
                      onChange={(data: string) => dispatch(setPassword(data))}
                      showHint={passwordError}
                      hint="Password is not accepted or empty"
                      error={passwordError || errorMessage !== ""}
                      fullWidth
                    />
                    <>
                      {errorMessage && (
                        <motion.div
                          key={errorMessage}
                          initial={{ opacity: 0, width: "100%" }}
                          animate={{ opacity: 1, width: "100%" }}
                          exit={{ opacity: 0 }}
                        >
                          <Typography
                            type="menu2"
                            textAlign="center"
                            variant="danger"
                            colorStyle="solid"
                          >
                            {errorMessage}
                          </Typography>
                        </motion.div>
                      )}
                    </>
                    <Button onClick={() => signIn()} fullWidth>
                      Sign In
                    </Button>
                  </Stack>
                </motion.div>
              )}
            </AnimatePresence>
            {/* <Typography type="subhead4">OR</Typography>
            <Button
              color="secondary"
              kind="tertiary"
              renderIcon={
                <img
                  src="https://static.frapy.co/assets/social-media/google-logo.svg"
                  height={16}
                />
              }
              fullWidth
            >
              Continue with Google
            </Button> */}
          </Stack>
          <Stack margin={[16, 0]}>
            <Divider />
          </Stack>
          <Stack margin={[8, 0, 0, 0]} direction="row" justifyContent="center">
            <Button kind="link" onClick={() => navigate("/reset-password")}>
              Can't login?
            </Button>
            <Button kind="link" onClick={() => navigate("/sign-up")}>
              Sign up for new user?
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

export default SignInForm;
