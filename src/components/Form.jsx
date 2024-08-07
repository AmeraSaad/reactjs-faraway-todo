import { useState } from 'react';
import uniqid from 'uniqid';

function Form({ onAdd }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) return;
    const newItem = { quantity, item, packed: false, id: uniqid("prefix")};
    onAdd(newItem);
    setQuantity(1);
    setItem('');
  };

  return (
    <>
    <form className="add-form" onSubmit={handleSubmit}>
    <h3>what do you need fooor your trip</h3>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
    </>
  )
}

export default Form
