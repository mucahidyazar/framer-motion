import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "../components";
import "./Toggle.css";

export function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      <motion.div layout className="card">
        <h4>Post Number one</h4>
        <Fade isActive={isToggled}>
          <p>
            this is inside the card. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem aliquam beatae provident, quaerat corporis
            sunt. Sapiente harum exercitationem, ex repellat deserunt ullam
            recusandae facilis dolorem labore, officia, eos enim ab sit
            veritatis! Consequatur accusamus illo et eaque cum obcaecati
            incidunt? Dolorum cupiditate neque error commodi repudiandae alias
            fugiat sapiente eligendi ratione et aliquam, ut nam officiis vel
            doloremque illum. Delectus adipisci praesentium labore, iure
            corporis consequatur obcaecati magni possimus optio quam, a
            voluptates similique dolor voluptatem recusandae asperiores harum
            voluptate. Asperiores harum dolorum sed earum, consectetur molestias
            ut? Facilis sint qui ducimus molestias dicta hic fugiat porro
            nesciunt eaque mollitia?
          </p>
        </Fade>
      </motion.div>
      {/* Basic */}
      <Slide isActive={isToggled}>
        <div className="card">
          <h4>Post Number one</h4>
          <p>this is inside the card</p>
        </div>
      </Slide>
      {/* Complex */}
      <Slide direction={-1} isActive={isToggled} distance={50}>
        <div className="card">
          <h4>Post Number one</h4>
          <p>this is inside the card</p>
        </div>
      </Slide>
    </React.Fragment>
  );
}

export default Toggle;
