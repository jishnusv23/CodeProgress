import React, { useReducer, useState } from "react";
type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};
type TodoTyes = TodoType[];
let intialState: TodoTyes = [];
const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      console.log("hey");
      return [
        ...state,
        { id: Date.now, text: action.payload, completed: false },
      ];
    default:
      throw new Error("Something wrong");
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, intialState);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "add", payload: newTodo });
      setNewTodo("");
    }
  };
  return (
    <div>
      <h1 className="text-2xl">TodoList</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add New Task"
        className="border border-black"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul className="bg-black">
        {state.map((todo, index) => (
          <li key={index} className="bg-blue-500 text-white">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
