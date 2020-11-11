import React from 'react';
import {Link} from 'react-router-dom';
import useQuiz from '../useQuiz';

function FlagQuiz() {

  const [randomOptions,
         randomCountry,
         isDisabledFieldset,
         bgColor,
         score,
         isCorrect,
         isLoading,
         getRandomCountry,
         checkAnswer,
         checkLoading]=useQuiz()

  return (
      <>
        <button onClick={checkLoading}>Loading...</button>
        {isLoading
         ?
            <div className="capitalComponent">
              <div className="wrapper">
                <img src={randomCountry.flag} alt="flag"></img>
                 <h2>Which country does this flag belong to?</h2>
              </div>
              <fieldset disabled={isDisabledFieldset}>
                <form>
                  {randomOptions.map(quiz => (
                    <button
                      key={quiz.length}
                      onClick={checkAnswer}
                      style={bgColor}
                      value={quiz}
                      className="bg"
                      >{quiz}</button>
                  ))}
                </form>
              </fieldset>
            </div>
         : null
        }

        {/* <button className="rnd mui-btn mui-btn--raised" onClick={getRandomCountry}>Next</button> */}
    </>
  )

}

export default FlagQuiz;
