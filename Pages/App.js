import React, {useContext} from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "../Components/Header"
import Main from "../Components/Main";
import Result from '../Components/Result';
import DisplayQuiz from '../Components/DisplayQuiz';
import useQuiz from '../useQuiz';
// import { Context } from '../contextProvider';

function App() {
  // const {quizData} = useContext(Context);
  // console.log(quizData);
    return (
        <div className="App">
          <Main />
        </div>
    )
}
export default App
