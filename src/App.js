import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showErr: false,
    };
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">Counter: {this.state.counter} </h1>

        <button
          data-test="increment-button"
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, showErr: false })
          }
        >
          Increment
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            if (this.state.counter > 0) {
              this.setState({ counter: this.state.counter - 1 });
            } else {
              this.setState({ showErr: true });
            }
          }}
        >
          Decrement
        </button>
        {this.state.showErr && (
          <span data-test="error-msg">Can't decrease more. </span>
        )}
      </div>
    );
  }
}

export default App;
