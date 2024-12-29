import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HtmlFor from "./Components/Form/HtmlFor";
import NotFound from "./Components/404/NotFound";
// import NestedSelection from "./Components/NestedSelection/NestedSelection";
// import CounterRedux from "./Components/CounterRedux";
// import Parent from "./Components/CustomHooks/Parent";
// import Higher from "./Components/HOC/Higher";
// import Higher2 from "./Components/HOC/Higher2";
// import UnControlled from "./Components/Controlled&Uncontrolled/UnControlled";
// import Timer from "./Components/Timer";
// import Problem1 from "./Components/Problem1";
// import Parent from "./Components/useCallback/Parent";
// import Debounce from "./Components/Debounce/Debounce";-
// import Another from "./Components/useMemo/Another";
// import FirstExample from "./Components/useMemo/FirstExample";
// import Todo from "./Components/useReducer/Todo";
// import ParentComp from "./Components/Parent-To-Child/ParentComp";
// import UseReducerCompo from "./Components/useReducer/UseReducerCompo";
import StateCounter from "./Components/StateCounter";
import Table from "./Components/ui/Table/Table";

function App() {
  return (
    <>
      {/* <ParentComp /> */}
      {/* <UseReducerCompo /> */}
      {/* <Todo/> */}

      {/* <FirstExample/> */}
      {/* <Another /> */}
      {/* <Debounce /> */}
      {/* <Parent/> */}
      {/* <Problem1 /> */}
      {/* <Timer /> */}
      {/* <UnControlled/> */}
      {/* <Higher />
        <Higher2 /> */}
      {/* <Parent/> */}
      {/* <CounterRedux /> */}
      {/* <NestedSelection/> */}

      <Router>
        <Routes>
          <Route path="/htmlfor" element={<HtmlFor />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<StateCounter />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
