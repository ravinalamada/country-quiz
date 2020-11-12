import React from 'react';
import DisplayQuiz from './DisplayQuiz';
import Result from './Result';
import useQuiz from '../useQuiz';

function Main() {
  const [ quizes,
    isLoading,
    score,
    showNextPage,
    HandleNextPage,
    handleClick,
    checkLoading] = useQuiz()
  return (
    <main>
      <DisplayQuiz />
    </main>
  )
}

export default Main;
