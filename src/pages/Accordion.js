import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

export const Accordion = () => {
  const [isToggled, setToggled] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setToggled((prev) => !prev)}>
        The Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 1 }}
            style={{ overflow: "hidden" }}
          >
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Minima ad sed quos obcaecati doloribus iste vero
              earum dignissimos dicta neque facilis vel voluptatibus fugiat,
              illum animi, debitis at impedit cumque!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
