import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });
  const inputElement = useRef(null);

  const handleInput = () => {
    const itemText = e.target.value;
    console.log('hello input');
  };
  const addItem = e => {
    e.preventDefault();
    console.log('input from addItem');
  };

  return (
    <div className="App">
      <TodoList
        addItem={addItem}
        inputElement={inputElement}
        handleInput={handleInput}
        currentItem={currentItem}
      />
    </div>
  );
};

export default App;
