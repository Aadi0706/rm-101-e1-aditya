import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

 const AddTask = (handleAddTodo) => {
  // NOTE: do not delete `data-testid` key value pair.
const [todos,setTodos] =useState("");

const handleinput = (e)=>{
  setTodos({...todos,
    text:e.target.value
  });
}
  const handleSubmit = ()=>{
    handleAddTodo(todos);

  }

  return (
    <div className={styles.todoForm}>

      <input data-testid="add-task-input" type="text" value={todos} onChange={handleinput} />

      <button data-testid="add-task-button"  onSubmit={handleSubmit}></button>
    </div>
  );
};

export default AddTask;
