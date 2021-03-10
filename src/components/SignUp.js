import React from "react";
import { motion } from "framer-motion";

export function SignUp({ setIsLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3>Sign Up</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="email">Password</label>
      <input id="email" type="text" />
      <br />
      <button>Sign Up</button>
      <p>
        Already have an account?{" "}
        <a onClick={() => setIsLoggedIn("signin")}>Sign In</a>
      </p>
    </motion.div>
  );
}

export default SignUp;
