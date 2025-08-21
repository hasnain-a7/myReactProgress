import React, { useState, useTransition } from "react";
/* useTransition hook used when some task isn't urgent mean do when you free but don't effect the ui */
const UseTransitionHook = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleAdd = () => {
    startTransition(() => {
      setInput((prev) => [...prev, data]);
      setData("");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500">
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="text-slate-950"
      />
      <button onClick={handleAdd} className="p-4 bg-white m-2 rounded">
        Add
      </button>

      <div>
        {isPending ? (
          <p>Adding...</p>
        ) : (
          input.map((item, index) => (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default UseTransitionHook;
