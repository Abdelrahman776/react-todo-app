import React from 'react'

const TodoInput = (props) => {

  const { handelAddTodo, inputRef, inputValue,setInputValue } = props;
  
  
  return (
    <div className="input-container">
      <input
        ref={inputRef}
        value={inputValue}
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Add Task"
        
        onKeyDown={(event) => {
          

          
          if (inputValue && event.key === "Enter") {
            handelAddTodo(inputValue);
            setInputValue("");
            inputRef.current.focus();
          }
        }}
      />

      <button
        onClick={() => {
          if (!inputValue) { return; }
          handelAddTodo(inputValue)
          setInputValue('')
          inputRef.current.focus();
      }}>
        <i className="fa-sharp fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInput