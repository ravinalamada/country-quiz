import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';
import Result from '../Components/Result';
import { Context } from '../ContextProvider';

function Main() {
  const {
         score,
         handleGoBackToHome
        } = useContext(Context)

  return (
    <main>
      <Switch>
        <Route exact path="/"><DisplayQuiz /></Route>
        <Route path="/result"><Result handleGoBackToHome={handleGoBackToHome} score={score} /></Route>
      </Switch>
  </main>
  )
}

export default Main;

