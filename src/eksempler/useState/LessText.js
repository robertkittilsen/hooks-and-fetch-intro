import { useState } from "react";

export function LessText({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);

  if (text.LessText <= maxLength) {
    return <span>{text}</span>;
  }
  return (
    <span style={{ width: "75vw" }}>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <button onClick={() => setHidden(false)} className="Read-more-btn">
          {" les mer"}
        </button>
      ) : (
        <button onClick={() => setHidden(true)} className="Read-more-btn">
          {" les mindre"}
        </button>
      )}
    </span>
  );
}
