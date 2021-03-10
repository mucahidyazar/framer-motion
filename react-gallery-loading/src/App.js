import React, { useState } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { y } = useWindowScrollPosition({
    throttle: 500, //every 1/2 second it will check
  });

  return (
    <div className="App">
      <AnimateSharedLayout>
        <motion.header
          onClick={() => setIsLoading(true)}
          layoutId="header"
          style={{
            justifyContent: y > 20 ? "center" : "flex-start",
          }}
          animate={{
            background:
              y > 20 ? "var(--headerBackground)" : "var(--background)",
            color: y > 20 ? "var(--background)" : "var(--headerBackground)",
            boxShadow: y > 20 ? "var(--level-2)" : "none",
          }}
        >
          <motion.h1 layoutId="logo" className="fake-logo">
            Level Up Tutorials
          </motion.h1>
        </motion.header>
        <main className="layout">
          <AnimatePresence>
            {isLoading && (
              <motion.div
                layoutId="header"
                class="loading"
                onClick={() => setIsLoading(false)}
              >
                <motion.h3 layoutId="logo">Level Up Tutorials</motion.h3>
                <p>Is loading...</p>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{
                    flip: Infinity,
                    duration: 1,
                  }}
                  style={{
                    background: "var(--primary)",
                    height: 6,
                    width: 100,
                  }}
                />
                <motion.div
                  initial={{ x: -75 }}
                  animate={{ x: 75 }}
                  transition={{
                    flip: Infinity,
                    duration: 1,
                    delay: 0.5,
                  }}
                  style={{
                    background: "var(--danger)",
                    height: 8,
                    width: 50,
                  }}
                />
                <motion.div
                  initial={{ x: -125 }}
                  animate={{ x: 125 }}
                  transition={{
                    flip: Infinity,
                    duration: 1.3,
                  }}
                  style={{
                    background: "var(--yellow)",
                    height: 6,
                    width: 150,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <h3>Grid Gallery</h3>
          <div className="grid gallery">
            {images.map((image, index) => (
              <img
                style={{
                  cursor: "pointer",
                }}
                src={`https://picsum.photos/seed/${image}/500/300`}
                alt="placeholder"
              />
            ))}
          </div>
        </main>
      </AnimateSharedLayout>
    </div>
  );
}

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"];
