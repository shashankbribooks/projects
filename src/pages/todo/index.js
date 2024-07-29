// pages/index.js
import Link from "next/link";
import TodoList from "../../components/todo-list/TodoList";

export default function Home() {
  return (
    <div>
      {/* <h1>Welcome</h1> */}
      <TodoList />
    </div>
  );
}
