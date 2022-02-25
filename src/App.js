import "./App.css";

import { NoHooks, Hooks } from "./eksempler/hooks-vs-ikke-hooks";
import {
  Counter,
  NamePrompt,
  AnnoyingButton,
} from "./eksempler/useState/AnnoyingButton";
import { Timer, DOMManipulation, Fetching } from "./eksempler/useEffect/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <NamePrompt /> */}
        <AnnoyingButton />
        {/* <DOMManipulation /> */}
        {/* <Timer /> */}
        {/* <Fetching /> */}
      </header>
    </div>
  );
}

export default App;
