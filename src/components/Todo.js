import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="card">
      <h2>My To-Do List</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {tasks.map((t, i) => (
         <li key={i} className="todo-item">
  <span className="task-text">{t}</span>

  <div className="action-box">
    <button className="edit-btn" onClick={() => editTask(i)}>
      Edit
    </button>
    <button className="delete-btn" onClick={() => deleteTask(i)}>
      Delete
    </button>
  </div>
</li>

        ))}
      </ul>
    </div>
  );
}

export default Todo;
