import React from 'react';
import DisplayQuiz from './DisplayQuiz';
import Button  from '../Components/Buttons';
import Result from './Result';
import useQuiz from '../useQuiz';
import Footer from '../Components/Footer';

function Main() {

  const  [quizes,
    score,
    showNextPage,
    showResult,
    isCorrect,
    HandleNextPage,
    handleClick,
    handleGoBackToHome
  ] = useQuiz()

  return (
    <main>
      {showResult
      ? <Result score={score} handleGoBackToHome={handleGoBackToHome}/>
      :
        <>
          {
            quizes.map(quiz => (
              <DisplayQuiz
                key={quiz.capital}
                handleClick={handleClick}
                quiz={quiz}
                isCorrect={isCorrect}
              />
            ))

          }
          {
            showNextPage && <Button isCorrect={isCorrect} HandleNextPage={HandleNextPage}/>
          }
        </>

      }
    <Footer />
  </main>
  )
}

export default Main;

