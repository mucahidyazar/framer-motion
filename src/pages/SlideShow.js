import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
];

export function SlideShow() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const index = wrap(0, COLORS.length, page);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -1000 : 1000, opacity: 0 }),
  };
  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence custom={direction}>
        <motion.div
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          key={page}
          custom={direction}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, { offset, velocity }) => {
            console.log(offset.x);
            if (offset.x > 400) {
              paginate(-1);
            } else {
              paginate(1);
            }
          }}
          style={{
            height: 400,
            width: "100%",
            background: COLORS[index],
            position: "absolute",
            left: 0,
            width: "100%",
            top: 0,
          }}
        />
      </AnimatePresence>
      <div style={{ zIndex: 10, position: "absolute" }}>
        <button onClick={() => paginate(-1)}>{"<"}</button>
        <button onClick={() => paginate(1)}>{">"}</button>
      </div>
    </div>
  );
}

export default SlideShow;
