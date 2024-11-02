import React, { useState } from "react";

const ErrorProneComponent = () => {
  const [error, setError] = useState("");
  const handleError = () => {
    try {
      throw new Error("something wen wrong");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <button onClick={handleError}>Trigger Error</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default ErrorProneComponent;
