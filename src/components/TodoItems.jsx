import React from "react";
import TdodItem1 from "./TdodItem1";
import styles from "./TdoItem.module.css";

const TodoItems = ({ todoItem, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItem.map((item) => (
        <TdodItem1
          TodoDate={item.dueDate}
          TodoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
