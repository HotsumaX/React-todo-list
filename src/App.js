import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });
  const inputElement = useRef(null);

  const handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    setCurrentItem(currentItem);
    console.log('this is the handleInput method');
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
    console.log('this is the addItem method');
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
