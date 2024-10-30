import { useState } from "react";

export const useCustomeHooks = () => {
    const [isDone,setIsDone]=useState(false)
    const handle=()=>{
        setIsDone(!isDone)
    }
    return{
        isDone,
        handle
    }
};
