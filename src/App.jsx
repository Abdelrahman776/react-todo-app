// import { useState } from 'react'


import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {

  const todos = [
    { input: "Go to the Gym", complete: false },
    { input: "First TODO item", complete: true },
    { input: "First TODO item", complete: true },
    { input: "Go to the Gym", complete: false },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
