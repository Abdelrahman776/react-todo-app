import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState } from "react";

function App() {
 

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  function handelCompleteTodo(todoIndex) {}
  function handelDeleteTodo(todoIndex) {}
  function handelEditTodo(todoIndex) {}
  function handelSaveTodos() {}

  function handelAddTodo(value) {
    const newTodoList = [...todos, { input: value, complete: false }];

    setTodos(newTodoList);
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
      <TodoInput handelAddTodo={handelAddTodo} />
    </>
  );
}

export default App;
