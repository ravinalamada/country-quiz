import React, {useState, createContext, useEffect, useRef} from 'react';
import Questions from './Components/Questions';
const endpoint = 'https://restcountries.eu/rest/v2/all';

const Context = createContext()

function ContextProvider({children}) {

  const [quizes, setQuizes] = useState([]);
  const [ quizesData,setQuizesData ] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const btnRef = useRef(null)

  async function getQuiz() {
    const fetchQuizes = await fetch(endpoint);
    const responseQuizes = await fetchQuizes.json();
    const randomQuiz = responseQuizes[Math.floor(Math.random() * responseQuizes.length)]
    const opt1 = responseQuizes[Math.floor(Math.random() * responseQuizes.length)]
    const opt2 = responseQuizes[Math.floor(Math.random() * responseQuizes.length)]
    const opt3 = responseQuizes[Math.floor(Math.random() * responseQuizes.length)]
    const randomAnswers = [randomQuiz.name, opt1.name, opt2.name, opt3.name];
    const randomQuestions = Questions[Math.floor(Math.random() * Questions.length)]

    //Initialized the quizData that will be used later
    const quizObj = {
      country: randomQuiz,
      answerOptions: randomAnswers,
      questions: randomQuestions,
      answers: randomQuiz.name,
    }

    setQuizes(responseQuizes);
    setQuizesData(quizObj);
  }

  useEffect(() => {
    getQuiz()
  }, []);

  // Check if the answers are correct, if so change the button's bg-color into green otherwise red
  function handleClick(e) {
    // Grab the button that is clicked
     const btn = e.target;
    // Find the correct answers
    const correctAnswers = quizesData.answers;

    if(btn.value === correctAnswers) {
      btn.classList.add('greenBg');
      setIsCorrect(true);
      setShowNextBtn(true);
      setScore(prev => prev + 1);
    }
    else if(btn.value !== correctAnswers) {
      btn.classList.add('redBg')
      btnRef.current.classList.add('greenBg');
      setShowNextBtn(true);
    }
    else {
      btn.classList.add('');
    }
  }

  // Show the next quiz
  function handleNextBtn() {
    getQuiz();
  }

  // Show the result
  function handleShowResult() {
    setShowResult(true)
  }

  // Go back to the homepage
    function handleGoBackToHome () {
      getQuiz();
      btnRef.current.classList.add('')
    }

  return (
    <Context.Provider value={{quizes,
                              quizesData,
                              isCorrect,
                              showNextBtn,
                              showResult,
                              score,
                              btnRef,
                              handleClick,
                              handleNextBtn,
                              handleShowResult,
                              handleGoBackToHome,
                            }}>
       {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
