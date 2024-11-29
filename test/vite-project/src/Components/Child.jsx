import React from "react";

const Child = ({ updateMessageRef }) => {
  const handleClick = () => {
    updateMessageRef.current('update From Child')
  };
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleClick}>Click and Pass</button>
    </div>
  );
};

export default Child;
