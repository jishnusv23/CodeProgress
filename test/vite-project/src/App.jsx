import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCustomeHooks } from "./Components/CustomHook";

function App() {
  // const [count, setCount] = useState(0);
  // const [todo, setTodo] = useState(false);
  const [click, setClick] = useState(false);
  const {isDone,handle}=useCustomeHooks()

  return (
    <>
      <button onClick={() => setClick(!click)}>Click</button>
      {click && (
        <div>
          <button onClick={handle}>Todo</button>
          {isDone ? <h1>wite</h1> : <h1>writed</h1>}
        </div>
      )}
    </>
  );
}

export default App;
