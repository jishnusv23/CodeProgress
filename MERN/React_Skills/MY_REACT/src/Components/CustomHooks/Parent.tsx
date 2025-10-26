import React from 'react'
import { useCounter } from './useCounter'

const Parent = () => {
    const [count,increment]=useCounter()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Incrment</button>
    </div>
  )
}

export default Parent