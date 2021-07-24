import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Components/Quiz";
import Answers from "./Components/Answers";
import Questions from "./Components/Questions";

ReactDOM.render(
  <React.StrictMode>
    <Quiz />
    <Questions />
    <Answers />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
