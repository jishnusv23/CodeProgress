import React, { useState } from "react";
import ChildCompo from "./ChildCompo";

const ParentComp = () => {
  const [childMsg, setChildMsg] = useState("");
  const handleStateMsg = (data: string) => {
    setChildMsg(data);
  };
  return (
    <div>
      <h1 className="text-red-700">THIS MESSAGE PASSING BY CHILD:{childMsg}</h1>
      <ChildCompo handleMsg={handleStateMsg} />
    </div>
  );
};

export default ParentComp;
