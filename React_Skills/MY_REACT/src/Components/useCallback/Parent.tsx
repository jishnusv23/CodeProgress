import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const increment1 =useCallback( () => {
    setCount1((prev) => prev + 1);
  },[count1])
  const increment2 = useCallback(()=>{
    setCount1((prev)=>prev+1)
  },[count2])
  const increment3=()=>{
    setCount3((prev)=>prev+1)
  }
  return (
    <div>
      <h1>First Class counter:{count1}</h1>
      <Child handleClick={increment1}>increment1</Child>
      <h1>Second Class Counter:{count2}</h1>
      <Child handleClick={increment2}>increment2</Child>
      <h1>Third Class Counter:{count3}</h1>
      <button onClick={increment3}>Incrment3</button>
    </div>
  );
};

export default Parent;
