import React, { useState } from "react";

function Welcome() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <output>{counter}</output>
      <button onClick={() => setCounter(counter - 1)}>minus</button>
    </div>
  );
}

export default Welcome;
