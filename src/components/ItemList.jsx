import React from 'react'
import Item from './Item';
import { useState } from 'react';

function ItemList({ items, onDelete, onToggleItems, onDeleteAllItems}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItemes;

  if (sortBy === "input") sortedItemes = items;

  if (sortBy === "item")
    sortedItemes = items
      .slice()
      .sort((a, b) => a.item.localeCompare(b.item));
  if (sortBy === "packed")
    sortedItemes = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));


  return (
    <div className="list">
    <ul className="list">
      {sortedItemes.map((item) => (
        <Item
          item={item}
          onDelete={onDelete}
          onToggleItems={onToggleItems}
          key={item.id}
        />
      ))}{" "}
    </ul>
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sorts by input ordered</option>
        <option value="item">Sorts by description value</option>
        <option value="packed">Sorts by packed items</option>
      </select>
      <button onClick={onDeleteAllItems}>Clear list</button>
    </div>
  </div>
  )
}

export default ItemList
