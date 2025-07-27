import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState, useRef, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("All");

  const inputRef = useRef(null);
const [inputValue, setInputValue] = useState("");

    function handelAddTodo(value) {
      const newTodoList = [...todos, { input: value, complete: false }];

      setTodos(newTodoList);
      handelSaveTodos(newTodoList);
    }
  
  function handelCompleteTodo(todoIndex) {
    let newTodoList = [...todos];
    newTodoList[todoIndex].complete = !newTodoList[todoIndex].complete;
    setTodos(newTodoList);
    handelSaveTodos(newTodoList)
  }
  function handelDeleteTodo(todoIndex) {
    let newTodoList = todos.filter((item, index) => {
      return index !== todoIndex;
    });

    setTodos(newTodoList);
    handelSaveTodos(newTodoList)
  }
  function handelEditTodo(todoIndex) {
    inputRef.current.focus();

    let newTodoList = [...todos];

    let todoContent = newTodoList[todoIndex].input;
    setInputValue(todoContent);

    handelDeleteTodo(todoIndex);
  }
  function handelSaveTodos(newTodoList) {
    localStorage.setItem(
      "f-todo-app",
      JSON.stringify({ TodoList: newTodoList })
    );
  }
  
  useEffect(() => {
    
    if (!todos || !localStorage.getItem("f-todo-app")) {
      return;
    }
    let db=JSON.parse(localStorage.getItem('f-todo-app')) 

  setTodos(db.TodoList)
}, [])


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
