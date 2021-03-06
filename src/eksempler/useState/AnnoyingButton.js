import { useState, useEffect } from "react";
import background from "../../assets/trolololo.png";

export function AnnoyingButton() {
  const [btnPos, setBtnPos] = useState({
    x: window.innerWidth / 2 - 200 + "px",
    y: window.innerHeight / 2 - 20 + "px",
  });
  const [trollVisible, setTrollVisible] = useState(false);
  const [failCount, setFailCount] = useState(0);

  useEffect(() => {
    if (failCount >= 10) {
      alert("Hah TROLOLO! På tide å begynne med oppgavene ;)");
    }
  }, [failCount]);

  function handleMouseEnter() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 400));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 40));
    setBtnPos({
      x: randomX + "px",
      y: randomY + "px",
    });
    setTrollVisible(true);
    setFailCount(failCount + 1);
  }

  function handleClick() {
    alert("WOW! Du klarte det jo! 🥳");
  }

  return (
    <div
      className="Annoying-btn-container"
      style={{
        backgroundImage: `url(${trollVisible ? background : ""})`,
      }}
    >
      <button
        className="Annoying-btn"
        style={{
          top: btnPos.y,
          left: btnPos.x,
        }}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        Klikk for å spole frem til middag! 🍕
      </button>
    </div>
  );
}
