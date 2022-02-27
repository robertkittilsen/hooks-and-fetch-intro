import { useState, useEffect } from "react";

export function Oppgave2() {
  // Her skal du lage et enkelt Logg inn skjema!

  // Lag states for inputs "brukernavn" og "passord"
  // Implementer "get" og "set" til states i input'ene og funksjonene nedenfor
  // Lag useEffects som logger ny input verdi til console hver gang en input endres

  function handleUsernameChange() {}
  function handlePasswordChange() {}

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={handleUsernameChange}
        value={""}
        type="text"
        placeholder="brukernavn"
        style={{
          padding: "2px",
          display: "block",
          width: "200px",
          height: "30px",
        }}
      />
      <input
        onChange={handlePasswordChange}
        value={""}
        type="password"
        placeholder="passord"
        style={{
          padding: "2px",
          display: "block",
          width: "200px",
          height: "30px",
        }}
      />
    </div>
  );
}
