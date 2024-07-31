"use client";
import { useState } from "react";
import TodoComplete from "../components/TodoComplete";
import TodoCreate from "../components/TodoCreate";
import Sidebar from "../components/Sidebar";
import TodoList from "../components/TodoList";
import Header from "../components/Header";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to the gym",
    completed: true,
  },
  {
    id: 2,
    title: "Eat breakfast",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState("all");

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="sm:w-1/3 xl:w-1/5 bg-white flex items-center">
        <Sidebar changeFilter={changeFilter} />
      </div>
      <div className="w-full pl-10">
        <Header></Header>
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filteredTodos()}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <TodoComplete
          computedItemsLeft={computedItemsLeft}
          clearComplete={clearComplete}
        />
      </div>
    </div>
  );
};

export default App;
