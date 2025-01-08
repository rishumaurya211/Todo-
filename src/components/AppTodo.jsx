import React, { useState } from "react";

const AppTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddedButtonClick = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row r-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Your Text"
            value={todoName} // set the default value
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success b-btn"
            onClick={handleAddedButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppTodo;
