import { useState } from "react";

export function Oppgave4() {
  // Her skal du lage en komponent som henter inn
  // bilde av en pokemon man skriver navnet på

  // Erstatt "pokemonName" og "pokemonImageUrl" med to states. En holder på navnet til pokemon'en
  // og en holder på URLen til bilde av pokemon'en

  const pokemonName = "";
  const pokemonImageUrl = "";

  // implementer funksjonenen "handlePokemonNameChange" og
  // "fetchPokemonImage"
  function handlePokemonNameChange(e) {
    // Oppdater state med navnet på pokemon
  }

  function fetchPokemonImage() {
    // Fetch fra APIet: https://pokeapi.co/api/v2/pokemon/<navn-på-pokemon>
    // OBS! APIet godtar kun lowercase navn på pokemon
    // bruk toLowerCase() på navnet som sendes inn
    // Oppdater state med url til bildet
    // Bilder ligger under "sprites" på objektet i responsen
    // Tips: bruk console.log() til å inspisere data returnert fra fetch i console
    // for å finne bilde-URLen
  }

  return (
    <div>
      <p>Skriv in navnet på en pokemon for å se bilde av den!</p>
      <input
        type="text"
        onChange={handlePokemonNameChange}
        value={pokemonName}
      />
      <button onClick={fetchPokemonImage}>Hent bildet</button>
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
