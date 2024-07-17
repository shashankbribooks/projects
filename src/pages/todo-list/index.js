import { useEffect, useState } from "react";
import styles from "../../pages/todo-list/todo.module.css";
import { Container, Spinner, InputGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (task.trim() === "") return;
    const newTask = { id: Date.now(), text: task, completed: false };
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
    setTask("");
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = async (id) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();
    setTasks(tasks.map((task) => (task.id === id ? data : task)));
  };

  const editTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  const saveTask = async (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    const newTask = { ...updatedTask, text: editTaskText };
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await response.json();
    setTasks(tasks.map((task) => (task.id === id ? data : task)));
    setEditTaskId(null);
    setEditTaskText("");
  };

  const cancelEdit = () => {
    setEditTaskId(null);
    setEditTaskText("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className="text-center fw-bold ">To-Do List</h1>
        <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
          <InputGroup
            className="bg-white rounded-3 border border-none"
            style={{ maxWidth: 768, boxShadow: "0px 0.5px 4px 5px #E5E5E5" }}
          >
            <Form.Control
              type="text"
              // value={search}
              autoFocus
              tabIndex={0}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className={`inputSearch border-0 ${styles.input}`}
              placeholder="Enter you task here..."
            ></Form.Control>
            <Button
              className={"border-2 px-3 bg-transparent border-none "}
              style={{ color: "black" }}
              onClick={addTask}
            >
              Add Task
            </Button>
          </InputGroup>
        </div>
        {/* <div className="d-flex justify-content-between ">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className={styles.input_box}
            placeholder="Enter a new task"
          />
          <button onClick={addTask} className={styles.btn}>
            Add Task
          </button>
        </div> */}
        <ul className={`${styles.taskList} list-group-numbered mt-3 ms-1`}>
          {tasks.map((task) => (
            <div className="d-flex justify-content-between">
              <li
                key={task.id}
                className={`${styles.taskItem} list-group-item`}
                style={{
                  color: task.completed ? "red" : "green",
                }}
              >
                {editTaskId === task.id ? (
                  <>
                    <input
                      type="text"
                      value={editTaskText}
                      onChange={(e) => setEditTaskText(e.target.value)}
                      className={`${styles.input_box} rounded border border-none`}
                      style={{
                        maxWidth: 400,
                        height: "40px",
                        boxShadow: "0px 0.5px 4px 5px #E5E5E5",
                      }}
                    />
                    <button
                      onClick={() => saveTask(task.id)}
                      className="bg-white rounded-3 border border-none"
                      style={{
                        boxShadow: "0px 0.5px 3px 3px #E5E5E5",
                        padding: "5px",
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-white rounded-3 border border-none"
                      style={{
                        boxShadow: "0px 0.5px 3px 3px #E5E5E5",
                        padding: "5px",
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        borderBottom: task.completed
                          ? "0.005px solid red"
                          : "none",
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                      className={`${styles.taskText} my-2`}
                    >
                      {task.text}
                    </span>
                    <button
                      onClick={() => toggleTaskCompletion(task.id)}
                      className="bg-white rounded-3 border border-none"
                      style={{
                        boxShadow: "0px 0.5px 3px 3px #E5E5E5",
                        padding: "5px",
                      }}
                    >
                      {task.completed ? "Undo" : "Complete"}
                    </button>
                    {!task.completed && (
                      <button
                        onClick={() => editTask(task.id, task.text)}
                        className="bg-white rounded-3 border border-none"
                        style={{
                          boxShadow: "0px 0.5px 3px 3px #E5E5E5",
                          padding: "5px",
                        }}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-white rounded-3 border border-none"
                      style={{
                        boxShadow: "0px 0.5px 3px 3px #E5E5E5",
                        padding: "5px",
                      }}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
              <div>
                {/* <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="me-2"
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button> */}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
