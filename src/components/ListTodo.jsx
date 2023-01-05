import React, { useEffect, useState } from "react";

export default function ListTodo() {
  const [todos, setTodos] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:5000/todos");
        const data = await res.json();
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, []);
  return <div>ListTodo</div>;
}
