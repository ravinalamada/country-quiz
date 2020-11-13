import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';
import Result from './Result';
import useQuiz from '../useQuiz';

function Main() {

  const [ quizes,
    score,
    showNextPage,
    HandleNextPage,
    handleClick,
  ] = useQuiz()

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <DisplayQuiz />
        </Route>
        <Route path="./Results">
          <Result/>
        </Route>
      </Switch>
    </main>
  )
}

export default Main;
