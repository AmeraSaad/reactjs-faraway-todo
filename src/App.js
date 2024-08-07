
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ItemList from './components/ItemList';

import "./styles.css"
import Footer from './components/Footer';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  
  function handleDeleteAll() {
    const confirmedit = window.confirm(
      "are sure you wnat to delete all the items "
    );
    if (confirmedit) setItems([]);
  }

  function handleToggleItmes(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <Header />
      <Form onAdd={handleAddItem} />
      <ItemList items={items} onDelete={handleDeleteItem}  onToggleItems={handleToggleItmes}
        onDeleteAllItems={handleDeleteAll}/>
      <Footer items={items}/>
    </>
  );
};

export default App;

