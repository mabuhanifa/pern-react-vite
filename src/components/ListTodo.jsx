import React, { useEffect, useState } from "react";

export default function ListTodo() {
  const [todos, setTodos] = useState("");
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodos = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="text-center">
      {todos &&
        todos.map((todo, i) => (
          <div key={i}>
            <h2>{todo.description}</h2>
            <button onClick={() => deleteTodos(todo.todo_id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}
