import { useState } from "react";

export function Fasit1() {
  const [age, setAge] = useState(0);
  const [siblings, setSiblings] = useState(0);

  function handleAgeIncrement() {
    setAge(age + 1);
  }
  function handleSiblingsIncrement() {
    setSiblings(siblings + 1);
  }

  return (
    <div>
      <p>Jeg er {age} år gammel</p>
      <p>Jeg har {siblings} søsken</p>
      <div>
        <button onClick={handleAgeIncrement}>Bli eldre!</button>
        <button onClick={handleSiblingsIncrement}>Få flere søsken!</button>
      </div>
    </div>
  );
}
