import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count1, setCount1] = useState(0);
  const [isRuning, setIsRunning] = useState(false);
  useEffect(() => {
    let timer:number | undefined;
    if (isRuning) {
      timer = setInterval(() => {
        setCount1((prev) => prev + 1);
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isRuning]);
  return (
    <div>
      <h1>{count1}</h1>
      
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={()=>{setIsRunning(false) ,setCount1(0)}}>Reset</button>
      <button onClick={()=>setIsRunning(false)}>End</button>
    </div>
  );
};

export default Timer;
