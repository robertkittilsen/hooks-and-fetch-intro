import "./App.css";

import { NoHooks, Hooks } from "./eksempler/hooks-vs-ikke-hooks";
import {
  Counter,
  NamePrompt,
  AnnoyingButton,
  LessText,
} from "./eksempler/useState";
import { Timer, DOMManipulation, Fetching } from "./eksempler/useEffect/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* useState eksempler 👇 */}

        {/* <Counter /> */}
        {/* <NamePrompt /> */}
        {/* <LessText
          text={
            "There’s a difference between interest and commitment. When you are interested in doing something, you do it only when it’s convenient. When you are committed to something, you accept no excuses; only results."
          }
          maxLength={62}
        /> */}
        {/* <AnnoyingButton /> */}

        {/* useEffect eksempler 👇 */}

        {/* <DOMManipulation /> */}
        {/* <Timer /> */}
        {/* <Fetching /> */}
      </header>
    </div>
  );
}

export default App;
