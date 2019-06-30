import React from 'react';
import ToDoEntry from './ToDoEntry.jsx';
export default function ToDoList(props) {
  const { todos, handleUpdate } = props;
  return (
    <div>
      <ol>
        {todos.map(task => {
          return (
            <ToDoEntry key={task._id} task={task} handleUpdate={handleUpdate} />
          );
        })}
      </ol>
    </div>
  );
}
