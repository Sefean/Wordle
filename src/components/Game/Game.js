import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Banner from "../Banner/Banner";
import Guess from "../Guess/Guess";
import Keyboard from "../Keyboard/Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answers, setAnswers] = React.useState([]);
  const [bannerVisible, setBannerVisible] = React.useState(false);
  const [bannerType, setBannerType] = React.useState("sad");
  const [checkedGuess, setCheckedGuess] = React.useState();

  function handleAddGuess(guess) {
    const checkedGuess = checkGuess(guess, answer);
    setCheckedGuess(checkedGuess);
    const nextAnswerList = [...answers, checkedGuess];

    setAnswers(nextAnswerList);

    if (guess == answer) {
      setBannerType("happy");
      setBannerVisible(true);
    } else if (nextAnswerList.length >= NUM_OF_GUESSES_ALLOWED) {
      setBannerVisible(true);
    }
  }

  function generateGuessRows() {
    const rows = [];
    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
      rows.push(<Guess key={i} possibleGuess={answers[i]} />);
    }
    return rows;
  }

  return (
    <>
      {bannerVisible && (
        <Banner type={bannerType} answer={answer} numGuesses={answers.length} />
      )}
      {generateGuessRows()}
      <Keyboard checkedGuess={checkedGuess} />
      <GuessInput handleAddGuess={handleAddGuess} disabled={bannerVisible} />
    </>
  );
}

export default Game;
