import React from "react";
import UpdateComponents from "./UpdateComponents";
interface ComponentProps {
  count: number;
  increment: () => void;
}

const Higher2: React.FC<ComponentProps> = ({ count, increment }) => {
  return (
    <div>
      <button className="border border-black" onClick={increment}>
        IncrementClickButton:{count}
      </button>
    </div>
  );
};

export default UpdateComponents(Higher2);
