import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext(); // Prepares the datalayer

// Wrap our app and provide the data layer to every components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

// export default StateProvider;
