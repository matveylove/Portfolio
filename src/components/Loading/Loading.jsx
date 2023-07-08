import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import classes from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={classes.background}>
      <AnimatePresence>
        <motion.div
          className={classes.box}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          exit={{ opacity: 0 }}
        >
          BY BRYANTSEV
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
