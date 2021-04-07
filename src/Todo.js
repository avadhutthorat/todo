import React, { useState, useEffect } from "react";

const Todo = ({ todo, changeToInput, saveData }) => {
  console.log(todo);
  const [name, setName] = useState("");
  const onchangeHandler = (e) => {
    setName(e.target.value);
  };
  const saveDataParent = (e) => {
    e.preventDefault();
    saveData(name);
  };
  const todoList =
    todo.length > 0 ? (
      todo.map((todo) => {
        return (
          <div className="collection-item" key={todo.id}>
            {!todo.editable ? (
              <span
                onClick={() => {
                  changeToInput(todo.id);
                }}
              >
                {todo.content}
              </span>
            ) : (
              <form onSubmit={(e) => saveDataParent(e)}>
                <input
                  value={name || todo.content}
                  type="text"
                  onChange={onchangeHandler}
                />
              </form>
            )}
          </div>
        );
      })
    ) : (
      <div className="center collection-item">You have no todo left !!</div>
    );

  return <div className="todos collection">{todoList}</div>;
};

export default Todo;
