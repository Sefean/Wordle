import React from "react";

function Banner({ type, answer, numGuesses }) {
  const happyBanner = (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>
        {" "}
        {numGuesses} {numGuesses > 1 ? "guesses" : "guess"}
      </strong>
      .
    </p>
  );

  const sadBanner = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
  return (
    <div className={`banner ${type}`}>
      {type === "happy" ? happyBanner : sadBanner}
    </div>
  );
}

export default Banner;
