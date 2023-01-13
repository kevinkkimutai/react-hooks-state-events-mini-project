import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleTaskDelete }) {
  return (
    <div className="tasks">
      { tasks.map((task) => <Task key={task.text} text={task.text} category={task.category} handleDelete={() => handleTaskDelete(task)}/>)}
    </div>
  );
}

export default TaskList;