import React, { useEffect } from 'react';

const TodoList = ({ addItem, inputElement, currentItem, handleInput }) => {
  useEffect(() => {
    inputElement.current.focus();
  });

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={addItem}>
          <input
            placeholder="Task"
            ref={inputElement}
            value={currentItem.text}
            onChange={handleInput}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};
export default TodoList;
