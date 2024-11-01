import React, { useState } from 'react'
import { useMemo } from 'react'

const UseMemo = () => {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)
    const increment1=()=>{
        setCount1((prev)=>prev+1)
    }
    const increment2=()=>{
        setCount2((prev)=>prev+1)
    }
    const isEven = useMemo(() => {
      let i = 0;
      while (i < 2000000000) {
        i++;
      }
      return count2 % 2 === 0;
    }, [count2]);


  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={increment1}>Increment1</button>
      <h1>{count2}</h1>
      <button onClick={increment2}>Incremen2</button>
      <p>{isEven ? "even" : "odd"}</p>
    </div>
  );
}

export default UseMemo