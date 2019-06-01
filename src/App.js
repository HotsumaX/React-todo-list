import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });
  const inputElement = useRef(null);

  const handleInput = ({ target: { value } }) =>
    setCurrentItem({ text: value, key: Date.now() });

  const addItem = () => {
    if (currentItem.text !== '') {
      setItems([...items, currentItem]);
      setCurrentItem({ text: '', key: '' });
    }
    console.log('this is the addItem method');
  };
  const deleteItem = key => {
    const filteredItems = items.filter(item => item.key !== key);
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
