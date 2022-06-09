import React from "react";
import styles from "./tasks.module.css";
import { v4 as uuidv4 } from 'uuid'


const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
const [todolist,setTodolist]=useState([]);


const getData = (todos) =>{

  const payload ={
    title:todos,
    id:uuidv4(),
    status:false
  }

  setTodolist([...todolist,payload]);
}

const newarr = todolist.map((e) => {
  if (e.id === id) {
    return {
      ...e,
      status: !e.status,
    };
  }
  return e;
});
setTodolist(newarr);




  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}

      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
