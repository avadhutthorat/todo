import React from "react";

const Todo = ({ todo, removeTodo }) => {
  const todoList =
    todo.length > 0 ? (
      todo.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              {todo.content}
            </span>
          </div>
        );
      })
    ) : (
      <div className="center collection-item">You have no todo left !!</div>
    );
  return <div className="todos collection">{todoList}</div>;
};

export default Todo;
