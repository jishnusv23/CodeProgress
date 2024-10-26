import React from "react";
interface ChilProps {
  handleClick: () => void;
  children: string;
}
const Child: React.FC<ChilProps> = ({ handleClick, children }) => {
  console.log("---------------------------------------------------");
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default React.memo(Child);
