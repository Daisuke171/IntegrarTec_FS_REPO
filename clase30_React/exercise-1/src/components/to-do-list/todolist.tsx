import React, { useState } from "react";
import "./todolist.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
    }
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index: number) => {
    if (index > 0) {
      const u = [...tasks]; ///updatedTasks
      [u[index], u[index - 1]] = [u[index - 1], u[index]];
      setTasks(u);
    }
  };

  const moveTaskDown = (index: number) => {
    if (index < tasks.length - 1) {
      const u = [...tasks]; ///updatedTasks
      [u[index], u[index + 1]] = [u[index + 1], u[index]];
      setTasks(u);
    }
  };

  return (
    <div className="todo-list">
      <h1>To-do list</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task-text">{task}</span>
            <div className="task-buttons">
              <button
                onClick={() => handleDeleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button onClick={() => moveTaskUp(index)} className="up-button">
                ⏫
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="down-button"
              >
                ⏬
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
