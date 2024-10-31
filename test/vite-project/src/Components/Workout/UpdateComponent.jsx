import React, { useState } from 'react'

const UpdateComponent = (WrapComponent) => {
 const newComponent=()=>{
     const [count,setcount]=useState(0)
    const increment1=()=>{
        setcount((prev)=>prev+1)
    }     
     return (
         <WrapComponent count={count} increment={increment1}/>
        )
    }
    return newComponent
}

export default UpdateComponent