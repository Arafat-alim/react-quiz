import React from "react";
import { useContext } from "react";
import { QuizContest } from "../context/quiz";
import Questions from "./Questions";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContest);
  console.log(quizState);

  // const [question, setQuestion] = useState([]);
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // default value is zero
  // console.log("currentQuestionIndex", currentQuestionIndex);
  return (
    <div className="quiz">
      <div className="score">Question 1/10</div>
      <Questions />
      <div
        className="next-button"
        // onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
      >
        Next Question
      </div>
    </div>
  );
};

export default Quiz;
