import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export const HeaderRight = styled.div`
  & > * {
    padding-right: 16px;
  }
`;
export const HeaderLeft = styled.div`
  & > * {
    padding-left: 16px;
  }
`;

export const Header = styled.header`
  background: var(--black);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ${HeaderRight}, & ${HeaderLeft} {
    display: flex;
    align-items: center;
  }

  > svg {
    margin-right: 20px;
  }
  > * {
    margin: 0;
  }
  h1 {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Card = styled(motion.div)`
  border-radius: 15px;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  h3 {
    margin-top: 0;
    font-size: 2rem;
  }
  img {
    width: 100%;
  }
`;
