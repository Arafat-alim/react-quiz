import React from "react";

import Questions from "./Questions";

const Quiz = () => {
  return (
    <div className="quiz">
      <div className="score">Question 1/10</div>
      <Questions />
      <div className="next-button">Next Question</div>
    </div>
  );
};

export default Quiz;
