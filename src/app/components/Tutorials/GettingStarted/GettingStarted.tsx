import React, { ReactElement, useState } from "react";

import { Stack } from "@frapy/ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import CreateFirstTeam from "./components/CreateFirstTeam";
import TeamCreated from "./components/TeamCreated";
import Finish from "./components/Finish";

type Props = {};

function GettingStarted({}: Props): ReactElement {
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <Stack
      alignItem="center"
      justifyContent="center"
      fullWidth
      fullHeight
      styles={{
        position: "fixed",
        zIndex: "3000",
        backgroundColor: "#ffffff",
      }}
    >
      <motion.div
        key="getting-started"
        transition={{ delay: 1 }}
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{ opacity: 0, scale: 0.75 }}
      >
        <AnimatePresence exitBeforeEnter>
          {step === 0 && (
            <motion.div
              key="getting-started-intro"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.75 }}
            >
              <Intro nextStep={nextStep} />
            </motion.div>
          )}
          {step === 1 && (
            <motion.div
              key="getting-started-create-first-team"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
            >
              <CreateFirstTeam nextStep={nextStep} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="getting-started-create-team-created"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
            >
              <TeamCreated nextStep={nextStep} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="getting-started-create-finish"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
            >
              <Finish />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Stack>
  );
}

export default GettingStarted;
