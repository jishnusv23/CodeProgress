import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const inputRef=useRef(null)
    
  return (
    <div>
        <h1>parent</h1>
        <input type="text" name="" id="" ref={inputRef} />
        <Child ref={inputRef}/>
    </div>
  )
}

export default Parent