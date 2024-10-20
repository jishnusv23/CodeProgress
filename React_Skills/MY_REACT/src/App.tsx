import "./App.css";
import Todo from "./Components/useReducer/Todo";
// import ParentComp from "./Components/Parent-To-Child/ParentComp";
// import UseReducerCompo from "./Components/useReducer/UseReducerCompo";
// import StateCounter from './Components/StateCounter'

function App() {
  return (
    <>
      <div className=" text-xl">
        <h1>APP For </h1>
        {/* <StateCounter/> */}
        {/* <ParentComp /> */}
        {/* <UseReducerCompo /> */}
        <Todo/>

      </div>
    </>
  );
}

export default App;
