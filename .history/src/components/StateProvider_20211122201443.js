import React, { createContext, useReducer } from "react";

const StateContext = createContext();

export default function StateProvider({ reducer, initialState, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}



export const userStateValue = () => useC