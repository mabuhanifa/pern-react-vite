import React from "react";
import EditTodo from "./components/EditTodo";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

export default function App() {
  return (
    <div>
      <InputTodo />
      <EditTodo />
      <ListTodo />
    </div>
  );
}
