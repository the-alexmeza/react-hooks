import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextHook() {
  const [username, setUsername] = useState("User");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextHook;
