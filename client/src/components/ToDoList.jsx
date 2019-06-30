import React from 'react';
import ToDoEntry from './ToDoEntry.jsx';
export default function ToDoList({ todos }) {
  return (
    <div>
      <ol>
        {todos.map(task => {
          return <ToDoEntry key={task._id} task={task} />;
        })}
      </ol>
    </div>
  );
}
