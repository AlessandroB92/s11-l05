// SearchResults.jsx
import React from "react";
import { Col } from "react-bootstrap";
import SearchCard from "./SearchCard";

const SearchResults = ({ searchResults }) => {
  return (
    <Col>
      <div id="searchResults">
        <h2>Search Results</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {searchResults.map((songInfo, index) => (
            <SearchCard key={index} songInfo={songInfo} />
          ))}
        </div>
      </div>
    </Col>
  );
};

export default SearchResults;
