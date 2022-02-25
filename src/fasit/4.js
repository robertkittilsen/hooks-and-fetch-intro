import { useState, useEffect } from "react";

export function ChuckNorrisQuote() {
  const [chuckNorrisQuote, setChuckNorrisQuote] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setChuckNorrisQuote(data.value);
      })
      .catch((e) => console.log("Fetch error: ", e));
  }, []);

  return <p>{chuckNorrisQuote}</p>;
}
