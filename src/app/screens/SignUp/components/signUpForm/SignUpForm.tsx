import React, { useState } from "react";

import {
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Logo,
  PasswordStrenght,
  Stack,
  Typography,
} from "@frapy/ui-kit";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { frapyClient } from "@core/api";
import { useDispatch } from "react-redux";
import { setScreen } from "@core/redux/actions/screenManagerActions";

type Props = {};

function SignUpForm({}: Props) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [newsletter, setNewsletter] = useState<boolean>(false);

  const [passwordAccepted, setPasswordAccepted] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [firstnameError, setFirstnameError] = useState<boolean>(false);
  const [lastnameError, setLastnameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const signUp = () => {
    setErrorMessage("");

    if (
      checkEmail() &&
      checkUsername() &&
      checkFirstname() &&
      checkLastname() &&
      checkPassword()
    ) {
      signUpRequest();
    }
  };

  const checkEmail = () => {
    if (validateEmail(email)) {
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  };

  const checkUsername = () => {
    if (username?.length >= 6) {
      setUsernameError(false);
      return true;
    } else {
      setUsernameError(true);
      return false;
    }
  };

  const checkPassword = () => {
    if (passwordAccepted) {
      setPasswordError(false);

      if (password === confirmPassword) {
        setPasswordError(false);
        setConfirmPasswordError(false);
        return true;
      } else {
        setConfirmPasswordError(true);
        return false;
      }
    } else {
      setPasswordError(true);
      return false;
    }
  };

  const checkFirstname = () => {
    if (firstname?.length > 0) {
      setFirstnameError(false);
      return true;
    } else {
      setFirstnameError(true);
      return false;
    }
  };

  const checkLastname = () => {
    if (lastname?.length > 0) {
      setLastnameError(false);
      return true;
    } else {
      setLastnameError(true);
      return false;
    }
  };

  const signUpRequest = async () => {
    try {
      const result = await frapyClient.registration.init({
        dto: {
          user: {
            email,
            password,
            username,
            firstName: firstname,
            lastName: lastname,
          },
        },
      });
      if (result.status === 201) {
        dispatch(setScreen("sign-up-completed"));
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.error.message);
      } else {
        switch (error.response.data.error.code) {
          case 200:
            setErrorMessage("User already exists.");
            break;

          default:
            setErrorMessage("Something went wrong.");
            break;
        }
      }
    }
  };

  return (
    <Stack>
      <Stack margin={[0, 0, 16, 0]} alignItem="center">
        <Logo application="frapy" type="full" size={42} />
      </Stack>
      <Card width={720}>
        <Stack padding={[24, 32]}>
          <Stack margin={[16, 0]} alignItem="center">
            <Typography type="h5">Create new account</Typography>
          </Stack>
          <Stack rowGap={16} alignItem="center">
            <Stack direction="row" columnGap={16}>
              <Input
                type="email"
                labelText="Email"
                onChange={(data: string) => setEmail(data)}
                showHint={emailError}
                hint="Email format not accepted or empty"
                error={emailError}
                fullWidth
              />
              <Input
                type="text"
                labelText="Username"
                onChange={(data: string) => setUsername(data)}
                showHint={usernameError}
                hint="Username format not accepted or empty. Minimum 6 characters required."
                error={usernameError}
                fullWidth
              />
            </Stack>
            <Stack direction="row" columnGap={16}>
              <Input
                type="text"
                labelText="Firstname"
                onChange={(data: string) => setFirstname(data)}
                showHint={firstnameError}
                hint="Firstname format not accepted or empty."
                error={firstnameError}
                fullWidth
              />
              <Input
                type="text"
                labelText="Lastname"
                onChange={(data: string) => setLastname(data)}
                showHint={lastnameError}
                hint="Lastname format not accepted or empty."
                error={lastnameError}
                fullWidth
              />
            </Stack>
            <Stack direction="row" columnGap={16}>
              <Stack rowGap={16}>
                <Input
                  type="password"
                  labelText="Password"
                  onChange={(data: string) => setPassword(data)}
                  showHint={passwordError}
                  hint="Password is not accepted or empty."
                  error={passwordError}
                  fullWidth
                />
                <PasswordStrenght
                  value={password ?? ""}
                  onChange={({ conditions }: { conditions: boolean }) =>
                    setPasswordAccepted(conditions)
                  }
                  fullWidth
                />
              </Stack>
              <Input
                type="password"
                labelText="Confirm password"
                onChange={(data: string) => setConfirmPassword(data)}
                showHint={confirmPasswordError}
                hint="Passwords are not matching or empty."
                error={confirmPasswordError}
                fullWidth
              />
            </Stack>
            <Stack rowGap={16} margin={[16, 0, 0, 0]} alignItem="flex-start">
              <Checkbox
                labelText="Yes! Send me news and offers from Frapy about products, events, and more."
                onChange={(data: boolean) => setNewsletter(data)}
              />
              <Typography type="body4">
                <>
                  By signing up, I accept the Frapy{" "}
                  <a href="https://google.com">Terms of Service</a> and
                  acknowledge the{" "}
                  <a href="https://google.com">Privacy Policy</a>.
                </>
              </Typography>
            </Stack>
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
            <Button onClick={() => signUp()} fullWidth>
              Create Account
            </Button>
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
            <Button kind="link" onClick={() => navigate("/")}>
              Sign in instead?
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}

export default SignUpForm;
