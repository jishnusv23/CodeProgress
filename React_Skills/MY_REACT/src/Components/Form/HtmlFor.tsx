import React from "react";

const HtmlFor = () => {
  return (
    <div>
      <h1>htmlFor</h1>
      <label htmlFor="username">userName:</label>
      <input
        type="text"
        id="username"
        name="username"
        className="border border-black rounded-md"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        name="passsword"
        className="border border-black rounded-md"
      />
    </div>
  );
};

export default HtmlFor;
