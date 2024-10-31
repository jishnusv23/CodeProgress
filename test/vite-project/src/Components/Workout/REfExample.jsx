import React, { useRef, useState } from "react";

const REfExample = () => {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [rendercount, setRenderCount] = useState(0);
  const foucsInput = () => {
    inputRef.current.focus();
  };
  const handleIncrement = () => {
    countRef.current += 1;
    console.log(countRef.current, "--------------");
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={foucsInput}>Focus</button>
      <p>Count:{countRef.current}</p>
    </div>
  );
};

export default REfExample;
