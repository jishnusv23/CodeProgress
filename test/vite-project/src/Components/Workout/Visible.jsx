import React from 'react'
import useToggle from '../hooks/UseToggle'

const Visible = () => {
    const  [isopen,toggle]=useToggle()
  return (
    <div>
      {isopen && <h1>Visible</h1>}
      <button onClick={toggle}> Click</button>
    </div>
  );
}

export default Visible