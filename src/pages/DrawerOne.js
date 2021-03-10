import React from "react";
import { DrawerOneComp } from "../components";
import "./DrawerOne.css";

export function DrawerOne() {
  return (
    <div className="layout">
      <h3>Blog Posts</h3>
      <button>Open Drawer</button>
      <DrawerOneComp>
        <h2>I am in the Drawer</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </DrawerOneComp>
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

export default DrawerOne;
