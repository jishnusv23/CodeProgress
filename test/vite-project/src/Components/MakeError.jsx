import React, { useState } from 'react'

const MakeError = () => {
     const [hasError, setHasError] = useState(false);
    
  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    
    throw new Error("Error: Something went wrong!");
  }
  return (
    <div>
        <h1>Make Error</h1>
        <button onClick={handleError}>click</button>
    </div>
  )
}

export default MakeError