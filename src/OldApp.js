import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import Modal from "./components/Modal";
import Accordion from "./components/Accordion";
import Nav from "./components/Nav";
import SlideShow from "./components/SlideShow";
import Squares from "./components/Squares";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [isToggled, setToggle] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const x = useMotionValue(0);
  console.log({ x });
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  console.log({ opacity });

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
      </Header>
      <Container>
        <SlideShow />
        <Squares />
        <h2>Super Cool</h2>
        <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>
        <Accordion />
        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            style={{ background: "var(--purp)" }}
            // whileHover={{ scale: [1.02, 0.8, 1.2] }}
            // whileTap={{ background: "var(--red)" }}
            // onHoverEnd={() => console.log("on hover end!")}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div exit={{ height: 0, opacity: 0, overflow: "hidden" }}>
                <Card
                  onDragEnd={(event, info) => {
                    console.log({ event });
                    console.log({ info });
                    if (Math.abs(info.point.x) > 200) {
                      setIsCardActive(false);
                    }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  style={{
                    x,
                    opacity,
                    background: "var(--blue)",
                  }}
                >
                  <h3>Some card</h3>
                  <img src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
