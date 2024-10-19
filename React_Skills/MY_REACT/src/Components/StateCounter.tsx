import React, { useState } from 'react'

const StateCounter = () => {
    const [count,setCount]=useState<number>(0)
  return (
    <div>
      <h1>StateCounter:{count}</h1>
      <button className='gap-4' onClick={()=>setCount((prev)=>prev+1)}>+</button>
      <button onClick={()=>setCount((prev)=>prev-1)}>-</button>
    </div>
  );
}

export default StateCounter