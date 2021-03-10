import React from "react";
import { motion } from "framer-motion";
import "./InfinityRepeat.css";

export function InfinityRepeat() {
  return (
    <div className="App">
      <main
        className="layout"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <motion.div
          className="box"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: 200 }}
          transition={{
            type: "spring",
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "mirror", // default loop, reverse ve mirror farklidir fakat cok benzerler
          }}
        />
      </main>
    </div>
  );
}

export default InfinityRepeat;
