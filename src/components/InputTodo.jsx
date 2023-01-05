import React, { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");
  const onSubmitForm = async () => {
    
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-center">PERN Todo List</h1>
      <div className="flex justify-center my-5">
        
          <input
            type="text"
            className="py-2 bg-gray-200 text-gray-700"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="px-5 py-2 bg-gray-700 ml-5" onClick={onSubmitForm}>
            ADD
          </button>
        
      </div>
    </div>
  );
}
