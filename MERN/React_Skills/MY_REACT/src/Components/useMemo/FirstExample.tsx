import React, { useMemo, useState } from "react";

const FirstExample = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const increment1 = () => {
    setCount1((prev) => prev + 1);
  };
  const increment2 = () => {
    setCount2((prev) => prev + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return count2 % 2 === 0;
  }, [count2]);

  return (
    <div>
      <h1>
        FirstExample:{count1}:SecondExample{count2}
      </h1>
      <div>
        <button onClick={increment1}>Increment1</button>
      </div>
      <div>
        <button onClick={increment2}>Increment1</button>
        <span className="gap-5 text-3xl pl-5 ">{isEven ? "Even" : "Odd"}</span>
      </div>
    </div>
  );
};

export default FirstExample;
