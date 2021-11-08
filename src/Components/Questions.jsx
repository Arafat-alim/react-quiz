import React, { useContext } from "react";
import { QuizContest } from "../context/quiz";
import Answers from "./Answers";

const Questions = ({ questions }) => {
  //creating a state
  const [quizState] = useContext(QuizContest);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  console.log("questions", currentQuestion);
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => {
          return <Answers answerText={answer} key={index.toString()} />;
        })}
      </div>
    </div>
  );
};

export default Questions;
