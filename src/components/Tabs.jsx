import React from "react";

const Tabs = ({todos}) => {
  const tabs = ["All", "Completed", "Open"];

  // let tab= 'All'
  
  return (
    <div className="tab-container">
      {tabs.map((tab, tabIndex) => {
        let numberOfTodosPerTab =
          tab === "All"
            ? todos.length
            : tab === "Completed"
            ? todos.filter((todo) => todo.complete).length
            : todos.filter((todo) => !todo.complete).length;

  
        return (
          <button key={tabIndex} className="tab-button">
            {tab}
            <span> ({numberOfTodosPerTab})</span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
