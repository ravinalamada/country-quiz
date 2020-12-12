import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';
import Footer from '../Components/Footer';
import andventure from '../images/adventure.svg';
import Result from '../Components/Result';
import { Context } from '../ContextProvider';

function Main() {
  const {
         score,
         showResult,
         handleGoBackToHome
        } = useContext(Context)

        console.log(showResult);

  return (
    <main>
      <div className="container">
        <img src={andventure} className="andventure"></img>
        <Switch>
           <Route exact path="/"><DisplayQuiz /></Route>
           <Route path="/result"><Result handleGoBackToHome={handleGoBackToHome} score={score} /></Route>
        </Switch>
      </div>
    <Footer />
  </main>
  )
}

export default Main;

