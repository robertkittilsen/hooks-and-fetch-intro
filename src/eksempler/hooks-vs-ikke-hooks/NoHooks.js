import { Component } from "react";

export class NoHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          The button is pressed: {counter} times.
          <button
            onClick={() => this.setState({ counter: counter + 1 })}
            style={{ padding: "1em 2em", margin: 10 }}
          >
            Click me!
          </button>
        </header>
      </div>
    );
  }
}
