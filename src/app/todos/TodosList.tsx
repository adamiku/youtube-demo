import Link from "next/link";
import { Todo } from "../../../typings";

const fetchTodos = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((res) => setTimeout(res, timeout));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  return todos;
};

const TodosList = async () => {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
