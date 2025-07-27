import React from 'react'

function TodoCard (props) {
const {
  todo,
  unfilteredTodoIndex,
  handelCompleteTodo,
  handelDeleteTodo,
  handelEditTodo,
} = props;

  return (
    <div className="card todo-item">
      <p
        className="todoInputText"
        onClick={() => {
          handelEditTodo(unfilteredTodoIndex);
        }}
      >
        {todo.input}
      </p>

      <div className="todo-buttons">
        <button
          className="button-card"
          // disabled={todo.complete}
          onClick={() => {
            handelCompleteTodo(unfilteredTodoIndex);
          }}
        >
          <h6>{!todo.complete ? "Complete" : "Uncomplete"}</h6>
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
    </div>
  );
}





export default TodoCard