import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GuessedWord from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showErr: false,
    };
  }

  render() {
    const guessedWords = [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 1 },
      { guessedWord: "party", letterMatchCount: 5 },
    ];
    return (
      <div>
        <h1>Jotto game</h1>
        <Congrats success={false} />
        <GuessedWord guessedWords={guessedWords} />
      </div>

      // *************** PART 1 *************** //
      // <div data-test="component-app">
      //   <h1 data-test="counter-display">Counter: {this.state.counter} </h1>

      //   <button
      //     data-test="increment-button"
      //     onClick={() =>
      //       this.setState({ counter: this.state.counter + 1, showErr: false })
      //     }
      //   >
      //     Increment
      //   </button>
      //   <button
      //     data-test="decrement-button"
      //     onClick={() => {
      //       if (this.state.counter > 0) {
      //         this.setState({ counter: this.state.counter - 1 });
      //       } else {
      //         this.setState({ showErr: true });
      //       }
      //     }}
      //   >
      //     Decrement
      //   </button>
      //   {this.state.showErr && (
      //     <span data-test="error-msg">Can't decrease more. </span>
      //   )}
      // </div>
    );
  }
}

export default App;
