import { useState } from "react";

export function Fasit4() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImageUrl, setPokemonImageUrl] = useState("");

  function handlePokemonNameChange(e) {
    setPokemonName(e.target.value);
  }

  function getPokemonImage() {
    // OBS APIet godtar kun lowercase navn på pokemon
    // bruk toLowerCase() på navnet som sendes inn
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonImageUrl(data.sprites.front_default);
      })
      .catch((e) => console.warn(e));
  }

  return (
    <div>
      <p>Skriv in navnet på en pokemon for å se bilde av den!</p>
      <input
        type="text"
        onChange={handlePokemonNameChange}
        value={pokemonName}
      />
      <button onClick={getPokemonImage}>Hent bildet</button>
      {pokemonImageUrl && (
        <center>
          <img
            style={{ display: "block", width: "500px", height: "auto" }}
            src={pokemonImageUrl}
            alt={"Bilde av " + pokemonName}
          />
        </center>
      )}
    </div>
  );
}
