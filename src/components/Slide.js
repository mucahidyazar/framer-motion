import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: ({ direction, distance }) => ({
    opacity: 0,
    x: direction * distance,
  }),
  animate: { opacity: 1, x: 0 },
  exit: ({ direction, distance }) => ({
    opacity: 0,
    x: direction * (distance * -1),
  }),
};
export function Slide({ children, isActive, direction = 1, distance = 200 }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          custom={{ direction, distance }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Slide;
