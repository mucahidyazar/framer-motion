import React, { useState } from "react";
import { DrawerTwoComp } from "../components";
import "./DrawerTwo.css";

export function DrawerTwo() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="layout">
      <h3>Blog Posts</h3>
      <button onClick={() => setIsActive(true)}>Open Drawer</button>
      <DrawerTwoComp isActive={isActive} setIsActive={setIsActive}>
        <h2>I am in the Drawer</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </DrawerTwoComp>
      {posts.map((post) => (
        <div className="card" key={post}>
          <h4>Post Number {post}</h4>
          <p>this is inside the card</p>
        </div>
      ))}
    </div>
  );
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default DrawerTwo;
