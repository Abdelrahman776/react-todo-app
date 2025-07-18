import React from "react";

const Header = ({ todos }) => {
  let numberOfTodoItems = todos.length;
  return (
    <>
      <header>
        <h1>
          you have {numberOfTodoItems}
          {numberOfTodoItems === 1 ? " task" : " tasks"}
        </h1>
      </header>
    </>
  );
};

export default Header;
