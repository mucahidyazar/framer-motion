import React from "react";
import { motion } from "framer-motion";
import "../pages/DrawerTwo.css";

export function DrawerTwoComp({ children, isActive, setIsActive }) {
  return (
    <React.Fragment>
      <motion.div
        style={{ pointerEvents: isActive ? "all" : "none" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        className="drawer-wrapper"
        onDragEnd={(event, info) => {
          info.offset.y > 200 && setIsActive(false);
          info.offset.y < -300 && setIsActive(true);
        }}
      >
        <motion.div
          style={{ pointerEvents: "all" }}
          animate={{ opacity: 1, y: isActive ? 0 : "80vh" }}
          transition={{ damping: 25, type: "spring" }}
        >
          <div class="drawer">{children}</div>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ pointerEvents: isActive ? "all" : "none" }}
        className="drawer--background"
        onClick={() => setIsActive(false)}
        animate={{ opacity: isActive ? 1 : 0 }}
      />
    </React.Fragment>
  );
}

export default DrawerTwoComp;
