import { createContext, useReducer } from "react";
import data from "../data";
import { shuffleAnswers } from "../helper";

const initialState = {
  // its an simple object
  currentQuestionIndex: 0,
  questions: data,
  showResults: false,
  answers: shuffleAnswers(data[0]),
};

const reducer = (state, action) => {
  //its a function
  if (action.type === "NEXT_QUESTION") {
    const showResults =
      state.currentQuestionIndex === state.questions.length - 1;
    const currentQuestionIndex = showResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
    const answers = showResults
      ? []
      : shuffleAnswers(state.questions[currentQuestionIndex]);
    return {
      //return an object
      ...state,
      currentQuestionIndex,
      showResults,
      answers,
    };
  }
  if (action.type === "RESTART") {
    return initialState;
  }
  console.log("reducer", state, action);
  return state;
};

export const QuizContest = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContest.Provider value={value}>{children}</QuizContest.Provider>;
};
