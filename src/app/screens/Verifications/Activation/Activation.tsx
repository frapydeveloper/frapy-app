import React, { useEffect, useState } from "react";

import { frapyClient } from "@core/api";
import { motion, AnimatePresence } from "framer-motion";
import { Stack } from "@frapy/ui-kit";
import { useSearchParams } from "react-router-dom";
import ActivationFailed from "./components/ActivationFailed";
import ActivationSuccess from "./components/ActivationSuccess";

type Props = {};

function Activation({}: Props) {
  const [searchParams] = useSearchParams();

  const processId: string = searchParams.get("processId") ?? "";
  const verificationToken: string = searchParams.get("verificationToken") ?? "";

  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    verifyRegistrationRequest();
  }, []);

  const verifyRegistrationRequest = async () => {
    try {
      const result = await frapyClient.registration.verify({
        id: processId,
        dto: {
          verificationToken: verificationToken,
        },
      });
      if (result.status === 201) {
        setSuccess(true);
      }
    } catch (error: any) {
      setSuccess(false);
    }
  };

  return (
    <Stack
      alignItem="center"
      padding={[50]}
      styles={{ backgroundColor: "#fafafb" }}
      fullHeight
    >
      <AnimatePresence exitBeforeEnter>
        {success ? (
          <motion.div
            key="sign-up-form"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
          >
            <ActivationSuccess />
          </motion.div>
        ) : (
          <motion.div
            key="sign-up-completed"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
          >
            <ActivationFailed />
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  );
}

export default Activation;
