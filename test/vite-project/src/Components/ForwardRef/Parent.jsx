import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const inputRef=useRef(null)
    const handleInput=()=>{
        inputRef.current.focus()
    }
  return (
    <div>
        <Child ref={inputRef}/>
        <button onClick={handleInput}>Focus</button>
    </div>
  )
}

export default Parent