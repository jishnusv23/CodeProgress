// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import { decrement, increment, reset } from "./redux/CounterSlice";

// function App() {
//   const count = useSelector((state) => state.count.count);
//   console.log("🚀 ~ file: App.jsx:7 ~ App ~ count:", count);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <button onClick={() => dispatch(reset())}>Reset</button>
//     </>
//   );
// }

// export default App;

function Nthlargest(root,n){
  let count=0
  let result
  function DFS(root){
      DFS(root.right)
      count++
      if(count==n){
        result=root.value
      }
      DFS(root.left)
  }
  DFS(root)
  return result
}
Nthlargest(root,3)