import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState(""); // Add searchText state

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Add a callback to update searchText state
  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchText === "") return true;

    // Check if the item's category matches the selectedCategory
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;

    // Check if the item's name includes the searchText (case-insensitive)
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      {/* Pass the search text and callback to the Filter component */}
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
