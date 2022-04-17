import React, { useEffect } from "react";

import { Stack } from "@frapy/ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "@core/redux/actions/screenManagerActions";

import SignUpForm from "./components/SignUpForm";
import SignUpCompleted from "./components/SignUpCompleted";

type Props = {};

function SignUp({}: Props) {
  const dispatch = useDispatch();

  const screenManager = useSelector((state: any) => state.screenManager);

  useEffect(() => {
    dispatch(setScreen("sign-up-form"));
  }, []);

  return (
    <Stack
      alignItem="center"
      justifyContent="center"
      styles={{ backgroundColor: "#fafafb" }}
      fullHeight
    >
      <AnimatePresence exitBeforeEnter>
        {screenManager.activeScreen === "sign-up-form" && (
          <motion.div
            key="sign-up-form"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
          >
            <SignUpForm />
          </motion.div>
        )}
        {screenManager.activeScreen === "sign-up-completed" && (
          <motion.div
            key="sign-up-completed"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
          >
            <SignUpCompleted />
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  );
}

export default SignUp;
