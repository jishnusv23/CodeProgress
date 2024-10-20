import React from "react";
interface TypesPrps {
  handleMsg: (data: string) => void;
}
const ChildCompo: React.FC<TypesPrps> = ({ handleMsg }) => {
  const sendData = () => {
    handleMsg("jishnu is the child");
  };
  const clearData = () => {
    handleMsg("");
  };
  return (
    <div>
      <h1>I'M ChildCompo</h1>
      <div className="flex justify-between ">
        <button
          className="border border-white bg-blue-600 pl-4"
          onClick={sendData}
        >
          Send Data To Parent
        </button>
        <button
          className="pr-5 border border-white bg-blue-600"
          onClick={clearData}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ChildCompo;
