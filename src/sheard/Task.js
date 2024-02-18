import React from "react";

const Task = (props) => {
  const { id, title, completed } = props;

  return (
    <div>
      <input type="checkbox" id={id} checked={completed} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
    </div>
  );
};

export default Task;
