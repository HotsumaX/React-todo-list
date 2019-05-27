import React, { useRef, useState } from 'react';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });
  const inputElement = useRef(null);

  const handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    setCurrentItem(currentItem);
    console.log('hello input');
  };

  const addItem = e => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== '') {
      console.log(newItem);
      const newItems = [...items, newItem];
      setItems(newItems);
      setCurrentItem({ text: '', key: '' });
    }
  };
  const deleteItem = key => {
    const filteredItems = items.filter(item => {
      return item.key !== key;
    });
    setItems(filteredItems);
  };

  return (
    <div className="App">
      <TodoList
        addItem={addItem}
        inputElement={inputElement}
        handleInput={handleInput}
        currentItem={currentItem}
      />
      <TodoItems entries={items} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
