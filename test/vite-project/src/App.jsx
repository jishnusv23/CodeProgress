import "./App.css";
import NoteColorSelector from "./Componentnes/NoteColorSelector";
import { useCustome } from "./Componentnes/useCustome";
function App() {
  const [isOpen,handle]=useCustome()
  return (
    <>
      {/* {isOpen && <h1>{"Hello"}</h1>} */}

      {/* <button onClick={handle}>Click</button> */}
      <NoteColorSelector/>
    </>
  );
}

export default App;
