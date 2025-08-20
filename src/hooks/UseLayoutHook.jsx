import React, { useEffect, useLayoutEffect } from "react";
import { useRef } from "react";

const UseLayoutHook = () => {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      console.log("Div height:", divRef.current.clientHeight);
      console.log("Layout effect executed");
    }
  }, []);
  useEffect(() => {
    console.log("useEffect width:", divRef.current.clientWidth);
  });

  return (
    <div
      ref={divRef}
      style={{
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1>Use Layout Hook Example</h1>
      <p>This is a simple example of using a layout hook in React.</p>
    </div>
  );
};

export default UseLayoutHook;
