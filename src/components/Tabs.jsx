import React from "react";

const Tabs = ({ todos,  setSelectedTab }) => {
  const tabs = ["All", "Completed", "Open"];

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
          <button key={tabIndex} className="tab-button"
            onClick={() => {
              setSelectedTab(tab)
            
          }}>
            {tab}
            <span> ({numberOfTodosPerTab})</span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
