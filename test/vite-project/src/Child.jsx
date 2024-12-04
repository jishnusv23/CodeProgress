import React from 'react'
import { forwardRef } from 'react'

const Child = forwardRef((props,ref) => {
    const handleClick=()=>{
        ref.current.focus()
    }
  return (
    <div>
        <button onClick={handleClick}>clik</button>
    </div>
  )
})

export default Child