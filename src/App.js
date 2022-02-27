import "./App.css";
import { NoHooks, Hooks } from "./eksempler/hooks-vs-ikke-hooks";
import {
  Counter,
  NamePrompt,
  AnnoyingButton,
  LessText,
} from "./eksempler/useState";
import { Timer, DOMManipulation, Fetching } from "./eksempler/useEffect/";
import { Oppgave1, Oppgave2, Oppgave3, Oppgave4 } from "./oppgaver";
import { Fasit1, Fasit2, Fasit3, Fasit4 } from "./fasit";

function UseStateEksempler() {
  return (
    <>
      {/* <Counter /> */}
      {/* <NamePrompt /> */}
      {/* <LessText
        text={
          "There’s a difference between interest and commitment. When you are interested in doing something, you do it only when it’s convenient. When you are committed to something, you accept no excuses; only results."
        }
        maxLength={62}
      /> */}
      {<AnnoyingButton />}
    </>
  );
}

function UseEffectEksempler() {
  return (
    <>
      {/* <DOMManipulation /> */}
      {/* <Timer /> */}
      {/* <Fetching /> */}
    </>
  );
}

function Oppgaver() {
  return (
    <>
      {/* <Oppgave1 /> */}
      {/* <Oppgave2 /> */}
      {/* <Oppgave3 /> */}
      {/* <Oppgave4 /> */}
    </>
  );
}

function Fasit() {
  return (
    <>
      {/* <Fasit1 /> */}
      {/* <Fasit2 /> */}
      {/* <Fasit3 /> */}
      {/* <Fasit4 /> */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseStateEksempler />
        <UseEffectEksempler />
        <Oppgaver />
        <Fasit />
      </header>
    </div>
  );
}

export default App;
