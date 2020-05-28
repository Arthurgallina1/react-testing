import React from "react";
import propTypes from "prop-types";

Congrats.propTypes = {
  success: propTypes.bool.isRequired,
};

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
