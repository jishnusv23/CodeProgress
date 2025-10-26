import React, { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("mounting in Functional component");
    return () => {
      console.log("unmounting Functional component Removed");
    };
  }, []);
  return <div>UseEffect</div>;
};

export default UseEffect;
