import React, { useState } from "react";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Welcome from "./components/Welcome";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDuaDate) => {
    console.log(`New Item Added:${itemName} Date:${itemDuaDate}`);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDuaDate,
      },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deleted :${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems todoItem={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
};
export default App;
