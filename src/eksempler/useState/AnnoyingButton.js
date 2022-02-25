import { useState } from "react";
import background from "../../assets/trolololo.png";

export function AnnoyingButton() {
  const [btnPos, setBtnPos] = useState({
    x: window.innerWidth / 2 - 200 + "px",
    y: window.innerHeight / 2 - 20 + "px",
  });
  const [trollVisible, setTrollVisible] = useState(false);

  function handleMouseEnter() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 400));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 40));
    setBtnPos({
      x: randomX + "px",
      y: randomY + "px",
    });
    setTrollVisible(true);
  }

  function handleClick() {
    alert("WOW! Du klarte det jo! 🥳");
  }

  return (
    <div
      style={{
        backgroundImage: `url(${trollVisible ? background : ""})`,
        backgroundPosition: "center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <button
        style={{
          position: "absolute",
          fontSize: "24px",
          top: btnPos.y,
          left: btnPos.x,
        }}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        Klikk for å spole frem til middag! 🍔
      </button>
    </div>
  );
}
