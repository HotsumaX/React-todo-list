import React from 'react';

const TodoList = ({ addItem }) => {
  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={addItem}>
          <input placeholder="Task" />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};
export default TodoList;
