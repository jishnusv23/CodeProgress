import React from "react";
import UpdateComponents from "./UpdateComponents";
interface ComponentProps {
  count: number;
  increment: () => void;
}

const Higher: React.FC<ComponentProps> = ({ count, increment }) => {
  return (
    <div>
      <button className="" onMouseEnter={increment}>
        Increment:{count}
      </button>
    </div>
  );
};

export default UpdateComponents(Higher);
