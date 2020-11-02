import React, { createContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [filterWord, dispatch] = useReducer(filterReducer, "");

  return (
    <FilterContext.Provider value={{ filterWord, dispatch }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
