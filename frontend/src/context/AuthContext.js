import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false); // Initialize to false

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get("http://localhost:8000/auth/loggedIn");
      setLoggedIn(loggedInRes.data);
    } catch (err) {
      console.error("Failed to check logged in status:", err);
      setLoggedIn(false); // Set to false on error or if endpoint fails
    }
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
