import React from "react";

function Task(props) {
  const { text, category, onDeleteTask} = props
  function handleDelete() {
    onDeleteTask(text);
    console.log("Deleting task:", text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
