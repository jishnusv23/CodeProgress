import React, { useReducer } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { Counter: state.Counter + 1 };

    case "decrement":
      return { Counter: state.Counter - 1 };
    case "reset":
      return { Counter: 0 };

    default:
      return state;
  }
};
const UseReducerCompo = () => {
  const [state, dispatch] = useReducer(reducer, { Counter: 0 });
  return (
    <div>
      <h1>Counter:{state.Counter}</h1>
      <div className="flex justify-between pt-5 ">
        <button className=" bg-blue-600 border border-white rounded-lg" onClick={()=>dispatch({type:'increment'})}>
          Increment
        </button>
        <button className=" bg-blue-600 border border-white rounded-lg" onClick={()=>dispatch({type:'decrement'})}>
          Decrement
        </button>
        <button className=" bg-blue-600 border border-white rounded-xl" onClick={()=>dispatch({type:"reset"})}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerCompo;
