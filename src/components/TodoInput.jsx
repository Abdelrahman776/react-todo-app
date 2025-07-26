import React from 'react'
import { useState } from 'react'

const TodoInput = (props) => {

  const { handelAddTodo } = props;
  
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="input-container">
      <input
        value={inputValue}
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Add Task"
      />

      <button
        onClick={() => {
          if (!inputValue) { return; }
          handelAddTodo(inputValue)
          setInputValue('')
      }}>
        <i class="fa-sharp fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInput