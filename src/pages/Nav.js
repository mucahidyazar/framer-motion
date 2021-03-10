import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%", transition: { delay: 0.3 } },
};
const ulVariants = {
  open: {
    scale: 1.05,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 2,
      staggerDirection: -1, // or 1
      when: "afterChildren", // or beforeChildren
    },
  },
  closed: {
    scale: 1,
  },
};
const liVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: -100, opacity: 0 },
};

const links = ["One", "Two", "Three", "Four", "Five"];

export function Nav({ isNavOpen, setIsNavOpen }) {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      exit="closed"
      transition={{ damping: 300 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <motion.ul variants={ulVariants}>
        {links.map((link) => (
          <motion.li variants={liVariants} key={link}>
            <a href="#">{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav>
  );
}

const MenuNav = styled(motion.nav)`
  background: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 40px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0;
      margin: 0 0 1rem;
      font-size: 2rem;

      a {
        color: #fff;
        text-decoration: none;
        border-bottom: 2px transparent solid;
        transition: 0.3s ease border;

        &:hover {
          border-bottom: 2px var(--blue) solid;
        }
      }
    }
  }
`;

export default Nav;
