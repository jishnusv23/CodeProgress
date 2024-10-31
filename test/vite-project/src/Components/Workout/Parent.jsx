import React from 'react'
import UpdateComponent from './UpdateComponent'

const Parent = ({ increment, count }) => {
  return (
    <div>
      <button onClick={increment}> Count:{count}</button>
    </div>
  );
};

export default UpdateComponent (Parent)