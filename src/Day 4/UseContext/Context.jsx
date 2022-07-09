import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function Context() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
               <h2>UseContext</h2> 

      <Login /> <User />
    </AppContext.Provider>
  );
}

export default Context;