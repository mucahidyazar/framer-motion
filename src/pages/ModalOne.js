import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

export const ModalOne = ({ isToggled, setToggle, children }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translate3d(-50%, 0,0)",
          }}
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 1 }}
          >
            <button onClick={() => setToggle(false)}>Close</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalOne;
