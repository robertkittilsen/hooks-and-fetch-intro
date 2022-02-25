import { useEffect, useState } from "react";

export function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p>count: {count}</p>
    </>
  );
}
