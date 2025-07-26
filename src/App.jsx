// import { useState } from 'react'


import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {

  const todos = [
    { input: "First TODO item", complete: true },
    { input: "Go to the Gym", complete: false },
    { input: "eat food ", complete: true },
    { input: "Study for exams", complete: false },
  ];


function handelCompleteTodo(todoIndex) {
  
}
function handelDeleteTodo(todoIndex) {
  
}
function handelEditTodo(todoIndex) {
  
}
function handelSaveTodos() {
  
}

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList
        todos={todos}
        handelCompleteTodo={handelCompleteTodo}
        handelDeleteTodo={handelDeleteTodo}
      />
      <TodoInput todos={todos} />
    </>
  );
}

export default App;
