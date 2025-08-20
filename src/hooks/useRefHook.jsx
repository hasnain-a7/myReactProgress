import React, { useRef, useEffect } from "react";
/* it use to store the reference of any dom element or anything else  */
const UseRefHook = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log("Input focused");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>UseRef Hook Example</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="focus"
        style={{ padding: "10px", fontSize: "16px" }}
      />
    </div>
  );
};

export default UseRefHook;
