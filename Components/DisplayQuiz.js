import React, {useContext} from 'react';
import useQuiz from '../useQuiz';
import Button  from '../Components/Buttons';
import { Context } from '../ContextProvider';
import Questions from './Questions';

function DisplayQuiz(e) {
  const {quizesData,
         showNextBtn,
         btnRef,
         handleClick,
         handleNextBtn,
         handleShowResult} = useContext(Context)
  const {country, questions, answerOptions} = quizesData;

  const correctAnswers = quizesData.answers;

  return (
    <div>
      <div>
        { questions === Questions.question1
          ? <h3>{country && country.name}{questions && questions.question1}</h3>
          : <div>
             <img src={country.flag}/>
             <h3>{questions && questions.question2}</h3>
            </div>
        }
      </div>
      <div>
        <div className="btn-container">
          <button ref={ correctAnswers === e.target.value ? btnRef : null} onClick={handleClick} value={ answerOptions && answerOptions[0]}>
            <div className="letter">A</div>
            <div className="answers">{answerOptions && answerOptions[0]}</div>
          </button>
          <button ref={ correctAnswers === e.target.value ? btnRef : null} onClick={handleClick} value={answerOptions && answerOptions[1]} >
          <div className="letter">B</div>
          <div className="answers">{answerOptions && answerOptions[1]}</div>
          </button>
          <button ref={ correctAnswers === e.target.value ? btnRef : null} onClick={handleClick} value={answerOptions && answerOptions[2]}>
          <div className="letter">C</div>
          <div className="answers">{answerOptions && answerOptions[2]}</div>
          </button>
          <button ref={ correctAnswers === e.target.value ? btnRef : null} onClick={handleClick} value={answerOptions && answerOptions[3]}>
          <div className="letter">D</div>
          <div className="answers">{answerOptions && answerOptions[3]}</div>
          </button>
        </div>
      </div>
      {showNextBtn && <Button handleShowResult={handleShowResult} handleNextBtn={handleNextBtn}>Next</Button>}
    </div>
    )
  }

  export default DisplayQuiz;
