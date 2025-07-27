import React from "react";
import TodoCard from "./TodoCard";
const todoList = (props) => {
  const { todos, selectedTab } = props;
  // const tab = "All";

  const filteredTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);

  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todo={todo}
            unfilteredTodoIndex={todos.findIndex(
              (unfilteredTodo) => unfilteredTodo === todo
            )}
            {...props}
          ></TodoCard>
        );
      })}
    </>
  );
};

export default todoList;
