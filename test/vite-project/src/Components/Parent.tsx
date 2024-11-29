import React, { useRef, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");
  const updateMessage=(newMessage)=>{
    setMessage(newMessage)
  }
  const uupdateMessageRef=useRef(updateMessage)
  return (
    <div>
      <h1>ParentComponent</h1>
      <p>Message from Child:{message}</p>
      {/* //chil */}
      <Child updateMessageRef={uupdateMessageRef}/>
      <button onClick={()=>updateMessage('updated parent')}>Click Parent</button>
    </div>
  );
};

export default Parent;
