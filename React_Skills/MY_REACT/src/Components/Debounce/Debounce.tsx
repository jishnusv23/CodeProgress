import  { useEffect, useState } from "react";

const Debounce = () => {
  const [text, setText] = useState("");
  const [debounceText, setDebounceText] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceText(text);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);
  const handleInput = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div>
        <h1 className="font-bold">Debounce Testing</h1>
        <h4>{debounceText}</h4>
        <input
          type="text"
          className="border border-black"
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default Debounce;
