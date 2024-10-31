import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [text, setText] = useState("");
  console.log("🚀 ~ file: Debouncing.jsx:5 ~ Debouncing ~ text:", text);
  const [debounceText, setDebounceText] = useState("");
  console.log(
    "🚀 ~ file: Debouncing.jsx:7 ~ Debouncing ~ debounceText:",
    debounceText
  );
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setDebounceText(text);
    }, 1000);
    return () => clearTimeout(timer);
  }, [text]);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button> Deboncing </button>
      <p>{debounceText}</p>
    </div>
  );
};

export default Debouncing;
