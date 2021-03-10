import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePositionReorder, useMeasurePosition } from "../hooks";
import "./Drag.css";

export function Drag() {
  const [order, updatePosition, updateOrder] = usePositionReorder(posts);

  return (
    <div className="layout">
      <h3>List of stuff</h3>
      {order.map((post, index) => (
        <DragItem
          key={post}
          index={index}
          post={post}
          updatePosition={updatePosition}
          updateOrder={updateOrder}
        />
      ))}
    </div>
  );
}

function DragItem({ post, updatePosition, updateOrder, index }) {
  const [isDragging, setIsDragging] = useState(false);

  const ref = useMeasurePosition((position) => {
    updatePosition(index, position);
  });

  return (
    <motion.div
      ref={ref}
      drag="y"
      layout //will change position nice and easly
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      className="card"
      key={post}
      animate={{
        scale: isDragging ? 1.05 : 1,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onViewportBoxUpdate={(_, delta) => {
        if (isDragging) {
          updateOrder(index, delta.y.translate);
        }
      }}
    >
      <h4>List Item {post}</h4>
      <p>this is inside the card</p>
    </motion.div>
  );
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default Drag;
