import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { SignIn, SignUp } from "../components";
import "./ModalTwo.css";

export function ModalTwo() {
  const [loggedIn, setIsLoggedIn] = useState("");
  return (
    <React.Fragment>
      <button onClick={() => setIsLoggedIn("signin")}>Sign In</button>
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          {loggedIn && (
            <>
              <motion.div
                className="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div layout className="card">
                  <AnimatePresence>
                    {loggedIn === "signin" && (
                      <SignIn key="signin" setIsLoggedIn={setIsLoggedIn} />
                    )}
                    {loggedIn === "signup" && (
                      <SignUp key="signup" setIsLoggedIn={setIsLoggedIn} />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLoggedIn("")}
                className="overlay"
              />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </React.Fragment>
  );
}

export default ModalTwo;
