// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import ErrorProneComponent from "./Components/ErrorBoundary/ErrorProneComponent";
// import UseMemo from "./Components/Workout/UseMemo";
// import Visible from "./Components/Workout/Visible";
// import Debouncing from "./Components/Workout/Debouncing";
// import REfExample from "./Components/Workout/REfExample";

// import Parent from "./Components/Workout/Parent";
// import Child from "./Components/Workout/Child";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Parent/>
    <Child/> */}
      {/* <REfExample/> */}
      {/* <Debouncing /> */}
      {/* <Visible /> */}
      {/* <UseMemo/> */}
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </>
  );
}

export default App;
