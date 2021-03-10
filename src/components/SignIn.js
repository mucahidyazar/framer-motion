import React from "react";
import { motion } from "framer-motion";

export function SignIn({ setIsLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3>Sign In</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="email">Password</label>
      <input id="email" type="text" />
      <label htmlFor="email2">Password Confirm</label>
      <input id="email2" type="text" />
      <br />
      <button>Sign In</button>
      <p>
        Need an account? <a onClick={() => setIsLoggedIn("signup")}>Sign Up</a>
      </p>
    </motion.div>
  );
}

export default SignIn;
