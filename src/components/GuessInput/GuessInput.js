import React from "react";

function GuessInput({ handleAddGuess, disabled, setGameStatus }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleAddGuess(guess);
    setGuess("");
    setGameStatus("running");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disabled}
        id="guess-input"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toLocaleUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
