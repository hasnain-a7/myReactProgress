/* A type of hook which is used to remeber the expensive calculation  */

import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState("");

  const expensiveResult = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i * data.length;
    }
    return result;
  }, [data]);

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Type something"
      />
      <p>Expensive Calculation Result: {expensiveResult}</p>
    </div>
  );
};

export default UseMemoHook;
