import React from "react";
import Answers from "./Answers";

const Questions = () => {
  return (
    <div>
      <div className="question">Text of our Questions</div>
      <div className="answers">
        <Answers />
        <Answers />
        <Answers />
        <Answers />
      </div>
    </div>
  );
};

export default Questions;
