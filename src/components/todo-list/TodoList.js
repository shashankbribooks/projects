// components/TodoList.js
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const snapshot = await db.collection("todos").get();
      const todosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosData);
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (newTodo.trim()) {
      await db.collection("todos").add({ text: newTodo, completed: false });
      setNewTodo("");
      // Fetch todos again
      fetchTodos();
    }
  };

  const updateTodo = async (id, updatedText) => {
    if (updatedText.trim()) {
      await db.collection("todos").doc(id).update({ text: updatedText });
      setEditingTodo(null);
      setUpdatedTodo("");
      // Fetch todos again
      fetchTodos();
    }
  };

  const toggleCompletion = async (id, completed) => {
    await db.collection("todos").doc(id).update({ completed: !completed });
    // Fetch todos again
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await db.collection("todos").doc(id).delete();
    // Fetch todos again
    fetchTodos();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo === todo.id ? (
              <div>
                <input
                  type="text"
                  value={updatedTodo}
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                  placeholder="Update todo"
                />
                <button onClick={() => updateTodo(todo.id, updatedTodo)}>
                  Update
                </button>
              </div>
            ) : (
              <div>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  onClick={() => toggleCompletion(todo.id, todo.completed)}
                >
                  {todo.text}
                </span>
                <button onClick={() => setEditingTodo(todo.id)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
