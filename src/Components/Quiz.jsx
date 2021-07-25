import React from "react";
import { useReducer } from "react";
import Questions from "./Questions";

const initialState = {
  // its an simple object
  currentQuestionIndex: 0,
  questions: [],
};

const reducer = (state, action) => {
  //its a function
  if (action.type === "NEXT_QUESTION") {
    return {
      //return an object
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  console.log("reducer", state, action);
  return state;
};
const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);
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
