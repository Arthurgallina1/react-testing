import React from "react";
import PropTypes from "prop-types";

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default function GuessedWords(props) {
  return (
    <div>
      {props.guessedWords.length === 0 ? (
        <div data-test="component-guessed-words">
          <span data-test="guess-instructions">
            Try to guess the secret word!
          </span>
        </div>
      ) : (
        <div data-test="component-guessed-words">
          <h3>Guessed Words</h3>
          Guess | Matching Letters
          <ul data-test="guessed-words-node">
            {props.guessedWords.map((word, index) => (
              <li data-test="guessed-word" key={index}>
                {word.guessedWord} | {word.letterMatchCount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
