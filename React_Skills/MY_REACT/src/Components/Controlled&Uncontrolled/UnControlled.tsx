import React, { useRef } from "react";

const UnControlled = () => {
  const texRef = useRef<HTMLHeadingElement>(null);

  return (
    <div>
      <h1 ref={texRef}>JISHNU</h1>
      <button
        onClick={() => {
          if (texRef.current) {
            texRef.current.style.color = "green";
          }
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          if (texRef.current) {
            texRef.current.style.color = "black";
          }
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default UnControlled;
