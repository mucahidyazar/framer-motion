import React, { useState } from "react";
import { shuffle } from "lodash";
import { motion } from "framer-motion";
const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
];

export function Squares() {
  const [colorsList, setColorsList] = useState(COLORS);

  return (
    <div>
      <button onClick={() => setColorsList(shuffle(colorsList))}>
        Shuffle
      </button>
      {colorsList.map((color) => (
        <motion.div
          key={color}
          layout
          // transition={{ type: "spring", damping: 10, stiffness: 30 }}
          style={{ background: color, height: 100, width: 100 }}
        />
      ))}
    </div>
  );
}

export default Squares;
