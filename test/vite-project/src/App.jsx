import "./App.css";
import ParentForward from "./Components/ParentForward";
// import Parent from "./Components/Parent";
// import MakeError from "./Components/MakeError";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
      <h1>{"Hello"}</h1>
        {/* <MakeError /> */}
        {/* <Parent/> */}
        <ParentForward/>
      </ErrorBoundary>
    </>
  );
}

export default App;
