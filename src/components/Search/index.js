import React, { useState, useEffect } from "react";

function Search({ onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    onSearchChange(searchText);
  }, [searchText]);

  const handleChange = (event) => {
    const { value } = event.target;

    setSearchText(value);
  };

  return (
    <input
      className="repositories__search_input"
      placeholder="Find a repository…"
      value={searchText}
      onChange={handleChange}
    />
  );
}

export default Search;
