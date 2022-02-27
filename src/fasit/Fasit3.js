import { useState, useEffect } from "react";

export function Fasit3() {
  const [chuckJoke, setChuckJoke] = useState("");

  useEffect(() => {
    fetchChuckJoke();
  }, []);

  function fetchChuckJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setChuckJoke(data.value);
      })
      .catch((e) => console.log("Fetch error: ", e));
  }

  return (
    <div style={{ width: "75vw" }}>
      <p>
        <b>Fakta om Chuck Norris: </b>
      </p>
      <p>
        <q>{chuckJoke}</q>
      </p>
      <button
        onClick={fetchChuckJoke}
        style={{ padding: "8px", fontSize: "24px" }}
      >
        Klikk for å hente ny fakta!
      </button>
    </div>
  );
}
