import React, {useState} from "react";

const Task = (props) => {
//const { id, title } = props;
const [completed, setCompleted] = useState (false);
const [title, setTitle] = useState (props.title)

function handleCompletedChange(){
    setCompleted (!completed)
 }

 function handleTitleChange(e){
    setTitle (e.target.value)
 }
return (
    <div>
        <input type="checkbox" id={props.id} checked={completed} onChange={handleCompletedChange}/>
        <input type="text" value={title} onChange={handleTitleChange}/>
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        
        {title}
      </span>
    </div>
  );
};

export default Task;
