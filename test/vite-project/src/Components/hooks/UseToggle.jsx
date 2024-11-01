import { useState } from "react";

function useToggle(iniitailvalue = false) {
  const [isopen, setIsOPen] = useState(iniitailvalue);
  const toggle = () => {
    setIsOPen((prev) => !prev);
  };

  return [isopen,toggle];
}
export default useToggle