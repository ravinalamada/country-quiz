import {useState, useEffect} from 'react';
import quizQuestions from './Components/Questions';
import Result from './Components/Result'

function useQuiz() {

  // I initialise the varibles
    const [quizes, setQuizes ] = useState([]);
    const [score, setScore] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [showNextPage, setShowNextPage] = useState(false);

    // Fetch the countries
    async function getcountries() {
      const endpoint = "https:restcountries.eu/rest/v2/all" ;
      const res = await fetch(endpoint);
      const data = await res.json();



  // I randomised the country data that I have fetched
      const randomQuizes = data[Math.floor(Math.random() * data.length)];
      const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
      // console.log(randomQuestion );
      const randomOpt1 = data[Math.floor(Math.random() * data.length)];
      const randomOpt2 = data[Math.floor(Math.random() * data.length)];
      const randomOpt3 = data[Math.floor(Math.random() * data.length)];
      const randomOptions = [randomQuizes.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
      const sortedQuizOptions = randomOptions.sort(() => { return 0.5 - Math.random() });

      // I initialed the variables thatI am going to push in my state
      const quizObject = {
        countries: randomQuizes,
        question: randomQuestion,
        answers: sortedQuizOptions,
        correctAnswers: randomQuizes.name,
        images: randomQuizes.flag,
        capital: randomQuizes.capital,
        userANswer: '',
        isCorrect: false,
      }
    setQuizes([quizObject]);
  }

  useEffect(() => {
    getcountries()
  }, [])

  const findCountryName = quizes.find(quiz => quiz.correctAnswers);
 console.log(findCountryName);

  // This is function that will toggle the background and increase the score when the it's true
  function handleClick(e) {
      const btnValue = e.target;
      console.log(btnValue);

      // check if the button value is the same as the country name
      if (btnValue.id === findCountryName.correctAnswers) {
          btnValue.style.backgroundColor = 'green';
          setScore((prev) => prev + 1)

      } else if(btnValue.id !== findCountryName.correctAnswers) {
        btnValue.style.backgroundColor = 'red';

      }
  }

  // Start the Quiz
  function checkLoading() {
    setIsLoading(!isLoading);
  }

  // This function will display the next page
  function HandleNextPage(e) {
    const btn = e.target;
    const findAnswer = quizes.find(quiz => quiz.correctAnswers);
        if (findAnswer === btn.id) {
            console.log('true');
          getcountries()
        }
    }

  // Return the variables and the function names that are needed
  return [quizes,
          isLoading,
          score,
          showNextPage,
          HandleNextPage,
          handleClick,
          checkLoading]
}

export default useQuiz;
