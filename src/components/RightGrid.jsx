import React from "react";
import Contacts from "./Contacts";
import SearchBar from "./SearchBar";

const RightGrid = () => {
  return (
    <div className="rightGrid">
      <SearchBar />
      <Contacts />
    </div>
  );
};

export default RightGrid;
