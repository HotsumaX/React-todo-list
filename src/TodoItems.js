import React from 'react';

const TodoItems = props => {
  const createTasks = item => {
    return (
      <li key={item.key} onClick={() => props.deleteItem(item.key)}>
        {item.text}
      </li>
    );
  };
  const todoEntries = props.entries;
  const listItems = todoEntries.map(createTasks);

  return <ul className="theList">{listItems}</ul>;
};
export default TodoItems;
