import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import useInterval from "@use-it/interval";
import Confetti from "react-confetti";

export function Countdown() {
  const [count, setCount] = useState(10);
  const [isComplete, setIsComplete] = useState(false);

  useInterval(() => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      setIsComplete(true);
    });
  }, 1000);

  return (
    <Container>
      {isComplete && <Confetti />}
      <AnimatePresence exitBeforeEnter>
        <motion.h2
          key={`countdown${count}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          {count}
        </motion.h2>
      </AnimatePresence>
      <GlobalStyle />
    </Container>
  );
}

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h2 {
    font-size: 6rem;
    margin: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
    background: #111;
    color: #fff;
    background-repeat: no-repeat;
`;

export default Countdown;
