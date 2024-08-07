// src/components/Item.js
import React from 'react';

const Item = ({ item, onDelete,onToggleItems }) => (
  <div className='item'>
    <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
  <span style={item.packed ? { textDecoration: "line-through" } : {}}>
    {item.quantity} {item.item}
  </span>

  <button onClick={() => onDelete(item.id)}>❌</button>
</div>
);

export default Item;
