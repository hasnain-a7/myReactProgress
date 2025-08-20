/* use Call back hook used to remember the function as it can it can full or may be in parts but does
it just memorize the function defination only


 */

import React, { useState, useCallback } from "react";

const UseCallbackHook = () => {
  const [updater, setupdater] = useState(0);
  const handleIncrement = useCallback(() => setupdater(updater + 1), [updater]);

  return (
    <div>
      <p>Updater value: {updater}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseCallbackHook;
