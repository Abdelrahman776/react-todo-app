import React from 'react'

function TodoCard (props) {
const { todo, unfilteredTodoIndex, handelCompleteTodo, handelDeleteTodo } =
  props;

  return (
    <div className="card">
      {todo.input}

      <button
        className="button-card"
        disabled={todo.complete}
        onClick={() => {
          handelCompleteTodo(unfilteredTodoIndex);
        }}
      >
        <h6>Complete</h6>
      </button>
      <button
        className="button-card"
        onClick={() => {
          handelDeleteTodo(unfilteredTodoIndex);
        }}
      >
        <h6>Delete</h6>
      </button>
    </div>
  );
}





export default TodoCard