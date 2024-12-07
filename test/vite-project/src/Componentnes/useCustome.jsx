import { useState } from "react"


export const useCustome=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const handle=()=>{
        setIsOpen(true)

    }
    return[isOpen,handle]

}