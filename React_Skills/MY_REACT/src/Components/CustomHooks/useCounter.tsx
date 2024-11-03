import { useState } from "react";

export function useCounter(initialValue: number = 0): [number, () => void] {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  return [count, increment];
}