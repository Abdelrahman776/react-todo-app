import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("All");

  const inputRef = useRef(null);
const [inputValue, setInputValue] = useState("");

  function handelCompleteTodo(todoIndex) {
    let newTodoList = [...todos];
    newTodoList[todoIndex].complete = !newTodoList[todoIndex].complete;
    setTodos(newTodoList);
  }
  function handelDeleteTodo(todoIndex) {
    let newTodoList = todos.filter((item, index) => {
      return index !== todoIndex;
    });

    setTodos(newTodoList);
  }
  function handelEditTodo(todoIndex) {
    inputRef.current.focus();

    let newTodoList = [...todos];

    let todoContent = newTodoList[todoIndex].input;
    setInputValue(todoContent);

    handelDeleteTodo(todoIndex);
  }
  function handelSaveTodos() {}

  function handelAddTodo(value) {
    const newTodoList = [...todos, { input: value, complete: false }];

    setTodos(newTodoList);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} setSelectedTab={setSelectedTab} />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handelCompleteTodo={handelCompleteTodo}
        handelDeleteTodo={handelDeleteTodo}
        handelEditTodo={handelEditTodo}
      />
      <TodoInput handelAddTodo={handelAddTodo}
        inputRef={inputRef} 
        inputValue={inputValue} 
        setInputValue={setInputValue} />
    </>
  );
}

export default App;
