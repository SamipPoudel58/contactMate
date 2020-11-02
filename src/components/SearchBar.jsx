import React, { useContext } from "react";
import { FilterContext } from "../contexts/filterContext";

const SearchBar = () => {
  const { dispatch } = useContext(FilterContext);
  const handleChange = (e) => {
    dispatch({ type: "FILTER", word: e.target.value });
  };
  return (
    <div className="searchBar">
      <input
        type="search"
        name=""
        id="searchBar__input"
        placeholder="Search Contacts"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
