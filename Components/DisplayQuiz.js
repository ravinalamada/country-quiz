import React, {useState} from 'react';
import useQuiz from '../useQuiz';
import Button  from '../Components/Buttons';
import andventure from '../images/adventure.svg';

// import quizQuestions from './Questions'

function DisplayQuiz({props}) {

  const [ quizes,
    score,
    showNextPage,
    HandleNextPage,
    handleClick,
  ] = useQuiz()

  // I mapped the
  const mappedQuestion = quizes.find(quiz => quiz.question.question1);
  return (
    <div className="container">
    <img src={andventure} className="andventure"></img>
    <div className="wrapper">
    {mappedQuestion
      ? quizes.map(quiz => (
        <div key={quiz.images}>
        <h2>{quiz.capital} is the capital of</h2>
        </div>
        ))
        : quizes.map(quiz => (
          <div key={quiz.images}>
          <img src={quiz.images} alt="Flag"/>
          <h2>Which country does this flag belong to ?</h2>
          </div>
          ))
        }
        </div>
        <fieldset >
        {quizes.map(quiz => (
          <form key={quiz}>
          <button onClick={handleClick} value={quiz.answers[0]}>
          <div className="letter">A</div>
          <div className="answers">{quiz.answers[0]}</div>
          </button>
          <button onClick={handleClick} value={quiz.answers[1]} >
          <div className="letter">B</div>
          <div className="answers">{quiz.answers[1]}</div>
          </button>
          <button onClick={handleClick} value={quiz.answers[2]}>
          <div className="letter">C</div>
          <div className="answers">{quiz.answers[2]}</div>
          </button>
          <button onClick={handleClick} value={quiz.answers[3]}>
          <div className="letter">D</div>
          <div className="answers">{quiz.answers[3]}</div>
          </button>
          </form>
          ))}
          </fieldset>
          {showNextPage && <Button />}
          </div>
          )
        }

        export default DisplayQuiz;
