import React, { useState, useEffect } from "react";
function TodoList() {
  // const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState();
  const [todoInput, setTodoInput] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: todoInput }]);
    setTodoInput("");
  };

  // if condtion is true => first logic showing & if condition is false then => second logic showing .
  const checkNumber = (x) => {
    return x > 10 ? "grater than 10 " : "less then or equal to 10";
  };
  console.log(checkNumber(4));

  //object
  const person = {
    name: "imtz",
    age: 25,
    course: "mca",
  };
  console.log(person.age);

  //map function
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const db = x.map((x) => x + 5);
  console.log(db);

  //filter map function
  const num = [2, 4, 5, 6, 7, 8, 9, "num"];
  console.log(num);
  const even_num = num.filter((x) => x % 2 === 0);
  console.log(even_num);

  //reduce functin
  const number = [2, 3, 4, 56, 6, 8];
  console.log(number, "without reduce value");
  const sum = number.reduce((acc, cur) => acc + cur);
  console.log(sum);

  //useEffect when it working our compoent is mount .. ya data fetching..
  // useEffect(() => {
  //   alert("welcome to our count page");
  // }, []);
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   alert("count was change");
  // }, [count]);

  return (
    <div>
      <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <div>
        <h2>Count value {count}</h2>
        <button onClick={() => setCount(count + 1)}>update count</button>
      </div>
    </div>
  );
}

export default TodoList;
