import React, { createContext, useState } from "react";

export const Context = createContext();

export const emptyState = { loading: true };

export default function Store({ children }) {
  const [state, dispatch] = useState(emptyState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
