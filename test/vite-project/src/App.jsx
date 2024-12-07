import "./App.css";
import { useCustome } from "./Componentnes/useCustome";
function App() {
  const [isOpen,handle]=useCustome()
  return (
    <>
      {isOpen && <h1>{"Hello"}</h1>}

      <button onClick={handle}>Click</button>
    </>
  );
}

export default App;
