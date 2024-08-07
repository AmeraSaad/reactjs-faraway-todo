import Swal from 'sweetalert2';
import { useState ,useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ItemList from './components/ItemList';

import "./styles.css"
import Footer from './components/Footer';

const App = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
  };

  const handleAddItem = (item) => {
    // setItems([...items, item]);
    const newItems = [...items, item];
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
  };

  const handleDeleteItem = (id) => {
    // setItems(items.filter((_, i) => i !== index));
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
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
        saveItemsToLocalStorage([]);
      }
    });
  }

  function handleToggleItmes(id) {
    // setItems((items) =>
    //   items.map((item) =>
    //     item.id === id ? { ...item, packed: !item.packed } : item
    //   )
    // );
    const newItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
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

