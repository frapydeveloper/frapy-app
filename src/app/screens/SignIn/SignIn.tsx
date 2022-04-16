import React, { useEffect, useState } from "react";

import { Stack } from "@frapy/ui-kit";

import { motion, AnimatePresence } from "framer-motion";
import SignInForm from "./components/SignInForm";
import TwoFactorForm from "./components/TwoFactorForm";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "@core/redux/actions/screenManagerActions";

type Props = {};

function SignIn({}: Props) {
  const dispatch = useDispatch();

  const screenManager = useSelector((state: any) => state.screenManager);

  useEffect(() => {
    dispatch(setScreen("sign-in"));
  }, []);

  return (
    <Stack
      alignItem="center"
      justifyContent="center"
      styles={{ backgroundColor: "#fafafb" }}
      fullHeight
    >
      <AnimatePresence exitBeforeEnter>
        {screenManager.activeScreen === "sign-in" && (
          <motion.div
            key="sign-in-form"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
          >
            <SignInForm />
          </motion.div>
        )}
        {screenManager.activeScreen === "sign-in-2fa" && (
          <motion.div
            key="two-factor-auth-form"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
          >
            <TwoFactorForm />
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  );
}

export default SignIn;
