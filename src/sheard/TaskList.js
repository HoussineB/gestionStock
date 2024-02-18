import React from "react";
import Task from "./Task";
import Title from "./Title";

const TaskList = (props) => {
  const { tasks } = props;

  return (
    <div>
      <Title text="List de Taches " />
      {tasks.map((task) => (
        <Task id={task.id} title={task.title} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;
