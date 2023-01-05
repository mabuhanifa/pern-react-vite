import React, { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");
  console.log(description)
  return (
    <div>
      <h1 className="text-center">PERN Todo List</h1>
      <div className="flex justify-center my-5">
        <form>
          <input
            type="text"
            className="py-2 bg-gray-200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="px-5 py-2 bg-gray-700 ml-5">ADD</button>
        </form>
      </div>
    </div>
  );
}
