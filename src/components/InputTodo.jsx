import React from "react";

export default function InputTodo() {
  return (
    <div>
      <h1 className="text-center">PERN Todo List</h1>
      <div className="flex justify-center my-5">
        <form>
          <input type="text" className="py-2 bg-gray-200" />
          <button className="px-5 py-2 bg-gray-700">ADD</button>
        </form>
      </div>
    </div>
  );
}
