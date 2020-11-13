import React from 'react';
import {Link} from 'react-router-dom';
import useQiuz from '../useQuiz';

function Buttons({correctAnswers, isCorrect}) {
  const [ quizes,
    score,
    showNextPage,
    HandleNextPage,
    handleClick,
  ] = useQiuz();

  return (
    <>
    {isCorrect
      ? <button className='nextBtn' onClick={HandleNextPage} value={correctAnswers}>Next</button>
      : <Link to="./Results" onClick={HandleNextPage} value={correctAnswers}>
      <button className='nextBtn'>Next</button>
      </Link>
    }
    </>
    )
  }
  export default Buttons;
