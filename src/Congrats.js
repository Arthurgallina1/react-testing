import React from "react";

export default function Congrats(props) {
  return (
    <div>
      {props.success ? (
        <div data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations! you guessed the word
          </span>
        </div>
      ) : (
        <div data-test="component-congrats" />
      )}
    </div>
  );
}
