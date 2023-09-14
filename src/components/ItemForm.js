import React, { useState } from "react";
import Filter from "./Filter";
import { v4 as uuid } from "uuid"; // Import uuid for generating unique IDs

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Call the callback to add the new item to the list
    onItemFormSubmit(newItem);

    // Clear the form fields
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
