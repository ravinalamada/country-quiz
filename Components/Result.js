import React from 'react'
import useQuiz from '../useQuiz';

function Result() {

  // Grabbed the variables from useQuiz components
  const [quizes,
    isLoading,
    score,
    showNextPage,
    HandleNextPage,
    handleClick,
    checkLoading] = useQuiz();

  return (
      <div className="capitalComponent">
        <h2>Results</h2>
        <h3>You got {score} correct answers</h3>
      </div>
  )

}

export default Result;
