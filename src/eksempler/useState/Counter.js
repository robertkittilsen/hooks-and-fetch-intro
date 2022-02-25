import { useState } from "react";

export function Counter() {
  const [counter, setCount] = useState(0);

  return (
    <>
      The button is pressed: {counter} times.
      <button
        onClick={() => setCount(counter + 1)}
        style={{ padding: "1em 2em", margin: 10 }}
      >
        Click me!
      </button>
    </>
  );
}
