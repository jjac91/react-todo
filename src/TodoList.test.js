import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";


function addTodo(todoList, todo = "eat") {
  const todoInput = todoList.getByLabelText("Add Todo:");
  fireEvent.change(todoInput, { target: { value: todo } });
  const button = todoList.getByText("Add Todo");
  fireEvent.click(button);
}
it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function () {
  const todoList = render(<TodoList />);
  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  addTodo(todoList);
  const deleteButton = todoList.getByText("X");
  expect(deleteButton).toBeInTheDocument();
  expect("eat").toBeInTheDocument;
});

it("can remove a box", function () {
  const todoList = render(<TodoList />);
  addTodo(todoList);
  const deleteButton = todoList.getByText("X");
  fireEvent.click(deleteButton);
  expect(todoList.queryByText("X")).not.toBeInTheDocument();
});
