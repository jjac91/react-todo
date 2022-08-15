import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoData) => {
    let newTodo = { ...todoData, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const renderTodos = todos.map((todo) => (
    <Todo id={todo.id} todo={todo.todo} handleRemove={remove} key={todo.id} />
  ));

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {renderTodos}
    </div>
  );
};

export default TodoList;
