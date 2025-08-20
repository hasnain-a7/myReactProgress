/* it is used when we have to mange complex logic
in this hook we have state, dispatch function to send data to reducer 
and reducer function take to arg state and action and everything in js is object that's why we pass
things in objct form   */

// eslint-disable-next-line no-unused-vars
import React from "react";
import { useReducer } from "react";

const UseReducerHook = () => {
  const myReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + 1;

      case "REMOVE":
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(myReducer, 0);

  return (
    <div className="h-36 p-8 bg-slate-500 ">
      <p className=" text-slate-100"> {state}</p>
      <button
        className=" p-2 bg-slate-300 rounded-md m-2 "
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        +
      </button>
      <button
        className=" p-2 bg-slate-300 rounded-md m-2 "
        onClick={() => {
          dispatch({ type: "REMOVE" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseReducerHook;
