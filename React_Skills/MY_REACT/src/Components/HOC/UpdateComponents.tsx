import React, { useState } from "react";

const UpdateComponents = (OriginalComponent: React.ComponentType<any>) => {
  const NewFunctionComponen: React.FC<any> = (props) => {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount((prev)=>prev+1)
    }
    return <OriginalComponent {...props} count={count} increment={increment}/>
  };
  return NewFunctionComponen
};

export default UpdateComponents;
