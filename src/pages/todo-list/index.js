import { useState } from "react";
import styles from "../../pages/todo-list/todo.module.css";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className="text-center fw-bold ">To-Do List</h1>
        <div className="d-flex justify-content-between">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={addTask} className={styles.btn}>
            Add Task
          </button>
        </div>
        <ul className={`${styles.taskList} list-group-numbered `}>
          {tasks.map((task) => (
            <div className="d-flex justify-content-between">
              <li
                key={task.id}
                className={`${styles.taskItem} list-group-item`}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "red" : "green",
                  border: task.completed ? "0.005px solid red" : "none",
                }}
              >
                {task.text}
              </li>
              <div>
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="me-2"
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
