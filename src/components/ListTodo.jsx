import React, { useEffect, useState } from "react";

export default function ListTodo() {
  const [todos, setTodos] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:5000/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, []);
  return (
    <div className="text-center">
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.description}</h2>
            <button>Delete</button>
          </div>
        ))}
    </div>
  );
}
