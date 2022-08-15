import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const defaultState = { todo: "" };

  const [formData, setFormData] = useState(defaultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData);
    setFormData(defaultState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add Todo:</label>
      <input
        id="todo"
        type="text"
        name="todo"
        value={formData.todo}
        onChange={handleChange}
      />
      <button id="newToodoButton">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
