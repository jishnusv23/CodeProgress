import React, { useState } from 'react'

const ControlledComponent  = () => {
    const [stateData,setStateData]=useState('')
    const handleInputs=(e:any)=>{
        setStateData(e.target.value)
    }
  return (
    <div>
        <input type="text" onChange={handleInputs} placeholder='Type something' value={stateData} />
         </div>
  )
}

export default ControlledComponent 