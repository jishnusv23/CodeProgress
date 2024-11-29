import React, { forwardRef } from 'react'

const ChildForward = forwardRef((props,ref)=> {
    const handleClik=()=>{
        ref.current.focus()
    }
  return (
    <div>
        <h1>Child Component</h1>
        
        <button onClick={handleClik}>click Me</button>
    </div>
  
  )
})

export default ChildForward