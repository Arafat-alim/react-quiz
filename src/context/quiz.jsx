import { createContext, useReducer } from "react";
import data from "../data";
const initialState = {
  // its an simple object
  currentQuestionIndex: 0,
  questions: data,
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

export const QuizContest = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContest.Provider value={value}>{children}</QuizContest.Provider>;
};
