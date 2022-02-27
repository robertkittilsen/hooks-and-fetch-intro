import { useState, useEffect } from "react";

export function Fasit2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Brukernavn endret! Nytt brukernavn: ", username);
  }, [username]);

  useEffect(() => {
    console.log("Passord endret! Nytt passord: ", password);
  }, [password]);

  function handleUsernameChange(e) {
    const newUsername = e.target.value;
    if (newUsername.length > 0) {
      setUsername(e.target.value);
    }
  }
  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    if (newPassword.length > 0) {
      setPassword(e.target.value);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={handleUsernameChange}
        value={username}
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
        value={password}
        type="password"
        placeholder="passord"
        style={{
          padding: "2px",
          display: "block",
          width: "200px",
          height: "30px",
          marginTop: "1em",
        }}
      />
    </div>
  );
}
