import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
export function Fade({ children, isActive }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Fade;
