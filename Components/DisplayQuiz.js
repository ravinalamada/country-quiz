import React, {useState} from 'react';
import useQuiz from '../useQuiz';
// import quizQuestions from './Questions'

function DisplayQuiz() {

  const [ quizes,
          isLoading,
          score,
          showNextPage,
          HandleNextPage,
          handleClick,
          checkLoading] = useQuiz()

  // I mapped the
  const mappedQuestion = quizes.find(quiz => quiz.question.question1);
  return (
            <div className="capitalComponent">
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
                      <button
                        onClick={handleClick}
                        id={quiz.answers[0]}
                      >{quiz.answers[0]}</button>
                      <button
                        onClick={(e) => handleClick(e)}
                        id={quiz.answers[1]}
                      >{quiz.answers[1]}</button><button
                        onClick={(e) => handleClick(e)}
                        id={quiz.answers[2]}
                      >{quiz.answers[2]}</button><button
                        onClick={(e) => handleClick(e)}
                        id={quiz.answers[3]}
                      >{quiz.answers[3]}</button>
                    </form>
                  ))}
              </fieldset>
              <button className={`${quizes.answers ? 'showNextBtn' : 'hideNextBtn'} nextBtn`} value={showNextPage} onClick={HandleNextPage}>Next</button>
            </div>
  )

}

export default DisplayQuiz;
