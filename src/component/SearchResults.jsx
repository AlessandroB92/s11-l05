// SearchResults.jsx
import React from "react";
import { Col } from "react-bootstrap";
import SearchCard from "./SearchCard";

const SearchResults = ({ searchResults }) => {
  return (
    <>
          {searchResults.map((songInfo, index) => (
            <SearchCard key={index} songInfo={songInfo} />
          ))}
    </>
  );
};

export default SearchResults;
