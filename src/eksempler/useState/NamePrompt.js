import { useState } from "react";

export function NamePrompt() {
  const [name, setName] = useState("Captain Hook");

  function handleClick() {
    const enteredName = prompt("What is your name?");
    setName(enteredName);
  }

  return (
    <>
      Name in state: {name}
      <button
        onClick={() => handleClick()}
        style={{ padding: "1em 2em", margin: 10 }}
      >
        Click to change name
      </button>
    </>
  );
}
