import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/CountSlice/CounterSlice";

const CounterRedux = () => {
  const counter = useSelector((state: any) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <div className=" flex flex-col gap-6">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default CounterRedux;
