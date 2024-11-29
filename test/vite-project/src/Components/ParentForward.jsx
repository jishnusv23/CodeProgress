import React, { useEffect, useRef } from "react";
import ChildForward from "./ChildForward";

const ParentForward = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <h1>Parent Component</h1>
      <input
        ref={inputRef} // Attach the ref to the input field
        type="text"
        placeholder="Focus on me!"
      />
      <ChildForward ref={inputRef} />
    </div>
  );
};

export default ParentForward;
