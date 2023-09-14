import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    onSearchChange(newSearchText); // Call the parent callback with the new search text
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText} // Make it a controlled input
        onChange={handleSearchChange} // Set state when the input changes
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
