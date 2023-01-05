import React, { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");
  const onSubmit = async (e) => {
    e.prevent.default();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-center">PERN Todo List</h1>
      <div className="flex justify-center my-5">
        <form>
          <input
            type="text"
            className="py-2 bg-gray-200 text-gray-700"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="px-5 py-2 bg-gray-700 ml-5">ADD</button>
        </form>
      </div>
    </div>
  );
}
