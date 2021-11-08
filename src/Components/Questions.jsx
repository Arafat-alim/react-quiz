import React, { useContext } from "react";
import { QuizContest } from "../context/quiz";
import Answers from "./Answers";

const Questions = ({ questions }) => {
  //creating a state
  const [quizState] = useContext(QuizContest);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  console.log(
    "questions",
    quizState.questions[quizState.currentQuestionIndex].question
  );
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
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
