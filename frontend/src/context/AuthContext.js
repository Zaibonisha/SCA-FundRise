import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.post("http://localhost:5000/api/users/login");
      setLoggedIn(loggedInRes.data); // Assuming loggedInRes.data is true/false based on login status
    } catch (err) {
      console.error("Failed to check logged in status:", err);
      setLoggedIn(false); // Set loggedIn state to false on error
    } finally {
      setLoading(false); // Set loading state to false after request completes
    }
  }

  useEffect(() => {
    getLoggedIn(); // Initial check of logged-in status
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
