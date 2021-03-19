import React, {useContext} from 'react';
import Button  from '../Components/Buttons';
import { Context } from '../ContextProvider';
import andventure from '../images/adventure.svg';
import Letters from '../Components/Letters';

function DisplayQuiz(e) {
  const {quizesData,
         showNextBtn,
         btnRef,
         handleClick,
         handleNextBtn,
         handleShowResult} = useContext(Context)

  // Destructure the data that I am going to use
  const {country, questions, answerOptions} = quizesData;

  // Grab the correct answers that will be compared with the button value
  const correctAnswers = quizesData.answers;

  // I mapped the letters array in order to get display it
  const mappedLetters = Letters.map((letter) => (<div key={letter}>{letter}</div>))

  return (
    <div className="container">
      <div className="adventure--wrapper">
        <img src={andventure} className="andventure" />
      </div>
      <div className="contents--wrapper">
        { questions && questions.question1
          ? <div className="countryName--wrapper">
              <h2 className="heading3">{country && country.capital} {questions && questions.question1}</h2>
            </div>
          : <div  className="flag--wrapper">
             <img src={country && country.flag}/>
             <h3 className="heading3">{questions && questions.question2}</h3>
            </div>
        }
      </div>
      <div>
        <div className="btn--wrapper">
          {answerOptions && answerOptions.map((opt, i) => (
            <button key={opt}
                    className="btn"
                    value={opt}
                    onClick={handleClick}
                    ref={correctAnswers === opt ? btnRef : null}>
              <span className="letter">{mappedLetters[i]}</span>
              <span className="answers">{opt}</span>
            </button>
          ))}
        </div>
      </div>
      {showNextBtn && <Button
        handleShowResult={handleShowResult}
        handleNextBtn={handleNextBtn}
        value={correctAnswers}
        >Next</Button>}
    </div>
    )
  }

  export default DisplayQuiz;
