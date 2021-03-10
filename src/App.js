import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AnimatedRoutes, RouteTransition } from "./components";
import {
  Card,
  CardGrid,
  Container,
  Header,
  HeaderRight,
  HeaderLeft,
} from "./Elements";
import {
  Accordion,
  Countdown,
  Drag,
  DrawerOne,
  DrawerTwo,
  InfinityRepeat,
  ModalOne,
  ModalTwo,
  Nav,
  SlideShow,
  Squares,
  Toggle,
} from "./pages";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Router>
      <Header>
        <HeaderRight>
          <Menu onClick={() => setIsNavOpen(true)} />
          <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Link to="/home">
            <h1>Framer Motion</h1>
          </Link>
        </HeaderRight>
        <HeaderLeft>
          <Link to="/accordion">Accordion</Link>
          <Link to="/countdown">Countdown</Link>
          <Link to="/drag">Drag</Link>
          <Link to="/drawer-one">Drawer One</Link>
          <Link to="/drawer-two">Drawer Two</Link>
          <Link to="/infinity-repeat">Infinity Repeat</Link>
          <Link to="/modal-one">Modal One</Link>
          <Link to="/modal-two">Modal Two</Link>
          <Link to="/slide-show">Slide Show</Link>
          <Link to="/squares">Squares</Link>
          <Link to="/toggle">Toggle</Link>
        </HeaderLeft>
      </Header>
      <Container>
        <AnimatedRoutes>
          <RouteTransition path="/accordion">
            <Accordion />
          </RouteTransition>
          <RouteTransition path="/countdown">
            <Countdown />
          </RouteTransition>
          <RouteTransition path="/drag">
            <Drag />
          </RouteTransition>
          <RouteTransition path="/drawer-one">
            <DrawerOne />
          </RouteTransition>
          <RouteTransition path="/drawer-two">
            <DrawerTwo />
          </RouteTransition>
          <RouteTransition path="/infinity-repeat">
            <InfinityRepeat />
          </RouteTransition>
          <RouteTransition path="/modal-one">
            <ModalOne />
          </RouteTransition>
          <RouteTransition path="/modal-two">
            <ModalTwo />
          </RouteTransition>
          <RouteTransition path="/slide-show">
            <SlideShow />
          </RouteTransition>
          <RouteTransition path="/squares">
            <Squares />
          </RouteTransition>
          <RouteTransition path="/toggle">
            <Toggle />
          </RouteTransition>
        </AnimatedRoutes>
      </Container>
    </Router>
  );
}

export default App;
