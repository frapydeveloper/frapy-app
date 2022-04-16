import React from "react";

import { Stack } from "@frapy/ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import ResetPasswordForm from "./components/resetPasswordForm";

type Props = {};

function ResetPassword({}: Props) {
  return (
    <Stack
      alignItem="center"
      justifyContent="center"
      styles={{ backgroundColor: "#fafafb" }}
      fullHeight
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="sign-in-form"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
        >
          <ResetPasswordForm />
        </motion.div>
      </AnimatePresence>
    </Stack>
  );
}

export default ResetPassword;
