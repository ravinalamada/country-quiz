import React from 'react';
import useQuiz from '../useQuiz';

function Capital() {

  const [randomOptions,
    randomCountry,
    isDisabledFieldset,
    bgColor,
    score,
    isCorrect,
    getRandomCountry,
    checkAnswer
   ] = useQuiz()

  return (
    <div className="capitalComponent">
        <div className="wrapper">
            <div className="img-container">
            <h2>{randomCountry.capital} is the capital of</h2>
            </div>
        </div>
        <fieldset disabled={isDisabledFieldset}>
            <form onClick={e => checkAnswer(e)}>
                <button style={bgColor} className="mui-btn mui-btn--raised" value={randomOptions[0]}>{randomOptions[0]}</button>
                <button style={bgColor} className="mui-btn mui-btn--raised" value={randomOptions[1]}>{randomOptions[1]}</button>
                <button style={bgColor} className="mui-btn mui-btn--raised" value={randomOptions[2]}>{randomOptions[2]}</button>
                <button style={bgColor} className="mui-btn mui-btn--raised" value={randomOptions[3]}>{randomOptions[3]}</button>
            </form>
        </fieldset>
        <button className="rnd mui-btn mui-btn--raised" onClick={getRandomCountry}>Next</button>
    </div>
  )

}

export default Capital;
