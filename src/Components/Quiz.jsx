import React from "react";
import { useContext } from "react";
import { QuizContest } from "../context/quiz";
import Questions from "./Questions";
import Results from "./Results";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContest);
  // console.log(quizState);

  // const [question, setQuestion] = useState([]);
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // default value is zero
  // console.log("currentQuestionIndex", currentQuestionIndex);
  return (
    <div className="quiz">
      {!quizState.showResults ? (
        <>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Questions />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </>
      ) : (
        <Results quizState={quizState} />
      )}
    </div>
  );
};

export default Quiz;
