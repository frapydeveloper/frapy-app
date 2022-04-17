import React, { ReactElement } from "react";

import { Loading, Stack } from "@frapy/ui-kit";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

function LoadingScreen({}: Props): ReactElement {
  const loadingManager = useSelector((state: any) => state.loadingManager);

  switch (loadingManager.status) {
    case true:
      return (
        <AnimatePresence exitBeforeEnter>
          <Stack
            styles={{
              position: "fixed",
              zIndex: "999999",
              backgroundColor: "#ffffff",
            }}
            alignItem="center"
            justifyContent="center"
            fullWidth
            fullHeight
          >
            <motion.div
              key="loading"
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
            >
              <Loading />
            </motion.div>
          </Stack>
        </AnimatePresence>
      );

    default:
      return <></>;
  }
}

export default LoadingScreen;
