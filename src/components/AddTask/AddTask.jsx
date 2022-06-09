import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";


 const AddTask = ({getData}) => {
  // NOTE: do not delete `data-testid` key value pair.
const [todos,setTodos] =useState("");


 

  return (
    <div className={styles.todoForm}>

      <input data-testid="add-task-input" type="text" value={todos} onChange={(e)=>{setTodos(e.target.value)}} placeholder="Enter todo" />

      <button data-testid="add-task-button"  onClick={()=>{getData(todos)}}>Add todo</button>

    </div>
  );
};

export default AddTask;
