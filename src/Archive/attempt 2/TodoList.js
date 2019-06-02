import React, { useEffect } from 'react';

const TodoList = props => {
  useEffect(() => {
    props.inputElement.current.focus();
  });

  return (
    <div className="todoListMain">
      <div className="header">
        <form>
          <input
            placeholder="Task"
            ref={props.inputElement}
            value={props.currentItem.text}
            onChange={props.handleInput}
          />
          <button type="button" onClick={props.addItem}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
