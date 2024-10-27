import { createContext, ReactNode, useState } from "react";

interface CheckContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const CheckContext = createContext<CheckContextType | undefined>(
  undefined
);

interface MyContextProps {
  children: ReactNode;
}

export const MyContext: React.FC<MyContextProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CheckContext.Provider value={{ count, setCount }}>
      {children}
    </CheckContext.Provider>
  );
};
