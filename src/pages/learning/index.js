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

  const name = ["imtaz", "javed", "rashd", "izhan", "atif", " ", "haddi"];
  const sumname = name.reduce((acc, cur) => acc + cur);
  console.log(sumname);

  // Async & await feature to fetch data from server its take some but its do our work ..
  const getdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  };
  //here we do this usEffect its run only whenever i want to run this ..
  // useEffect(() => {
  //   getdata();
  // },[]);

  const isLoggedIn = true;
  const device = "Mobile";
  const bgColor = device == "Desktop" ? "red" : " yellow";
  const userDetails = {
    name: "imtiyaz",
    post: " frontend devlopr",
    date_of_join: "20 - 10 - 2024",
    skills: ["html", "css", "javascript", "next.js", "react.js", "bootstrap"],
  };
  const logout = true;

  
  return (
    <div>
      
      <div>
        <h2>Count value {count}</h2>
        <button onClick={() => setCount(count + 1)}>update count</button>
      </div>

      <div style={{ backgroundColor: bgColor }}>
        {isLoggedIn ? <p>Welcome Back!</p> : <p>Please login first.</p>}
      </div>
      {/* here we use && and oprend whenever boths oprend are true then its showing */}
      <div>
        {isLoggedIn ? (
          <div>
            {userDetails.name && <p>name: {userDetails.name} </p>}
            {userDetails.post && <p>post : {userDetails.post}</p>}
            {userDetails.date_of_join && (
              <p>doj : {userDetails.date_of_join}</p>
            )}
            <ul style={{ backgroundColor: "red", color: "white" }}>
              {userDetails.skills &&
                userDetails.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
            </ul>
          </div>
        ) : (
          <div>
            <p>Please login first.</p>
          </div>
        )}
      </div>

      <div>
        {logout ? <p>you are right path</p> : <p>Please go back and login</p>}
      </div>
    </div>
  );
}

export default TodoList;
