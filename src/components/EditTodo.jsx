import React from "react";

export default function EditTodo() {
  const editTodos = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
      });
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };
  return <div>EditTodo</div>;
}
