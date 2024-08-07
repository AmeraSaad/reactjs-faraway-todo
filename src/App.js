import Swal from 'sweetalert2';
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
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to clear all items?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]);
      }
    });
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

