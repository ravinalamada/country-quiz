import React, { useEffect, useState } from 'react';
// import NextButton from './NextButton';
import quizQuestions from './Questions'
// import Results from './Results';

const API_url = 'https://restcountries.eu/rest/v2/all'
function useFetchQuiz() {
    const [ quizes, setQuiz ] = useState([])
    const [ score, setScore ] = useState(0)
    const [ button, setbutton ] = useState(false)
    const [ nextPage, setNextPage ] = useState(null)
    const [ classList, setClass ] = useState('')
    const [isLoading, setIsLoading] = useState(false);


    async function fetchData(id) {
        const response = await fetch(API_url)
        const result = await response.json()
        console.log(result);
        // Randomizing questions
        const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
        // Randomizing answers
        const randomizingAnswers = result[Math.floor(Math.random() * result.length)]
        // Randomizing option of answers
        const opt1 = result[Math.floor(Math.random() * result.length)];
        const opt2 = result[Math.floor(Math.random() * result.length)];
        const opt3 = result[Math.floor(Math.random() * result.length)];
        // Answers
        const options = [ randomizingAnswers.name, opt1.name, opt2.name, opt3.name]
        const sortedOptions = options.sort(() => { return 0.5 - Math.random() });
        // Question
        const allQuestions = [ randomQuestion.question1 ? `${randomizingAnswers.capital} ${randomQuestion.question1}` : `${randomQuestion.question2}`]
        // const allQuestions = [ `${randomQuestion.question1}`, `${randomQuestion.question2}`]
        const quizObj = {
            question: randomQuestion,
            countries: randomizingAnswers,
            flag: randomizingAnswers.flag,
            capital: randomizingAnswers.capital,
            answers: sortedOptions,
            correctAnswer: randomizingAnswers.name,
            userAnswer: '',
            isCorrect: false,
        }
        // Set state
        setQuiz([quizObj])
    }
    // useEffect
    useEffect(() => {
        fetchData()
    }, [])
    console.log(quizes);
    function handleClick(e) {
        const userGuess = e.target
        setbutton(true)
        const findAnswer = quizes.find(quiz => quiz.correctAnswer);
        const
        if (userGuess.value == findAnswer.correctAnswer) {
            userGuess.classList.add('true')
            setScore(prev => prev + 1)
        } else if (userGuess !== findAnswer.correctAnswer) {
            userGuess.classList.add('untrue')
            // userGuess.classList.add('true')
        }
    }
    // function handleNextButton (e) {
    //     const findAnswer = quizes.find(quiz => quiz.correctAnswer);
    //     if (findAnswer == e.target.value) {
    //         console.log('true');
    //     }
    // }
    return [classList, quizes, button, nextPage, score, handleClick, handleNextButton]
}
export default useFetchQuiz

// const endpoint = "https:restcountries.eu/rest/v2/all" ;
// const res = await fetch(endpoint);
// const data = await res.json();

// // I randomised the country data that I have fetched
// const randomQuizes = data[Math.floor(Math.random() * data.length)];
// const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
// const randomOpt1 = data[Math.floor(Math.random() * data.length)];
// const randomOpt2 = data[Math.floor(Math.random() * data.length)];
// const randomOpt3 = data[Math.floor(Math.random() * data.length)];
// const randomOptions = [randomQuizes.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
// const sortedQuizOptions = randomOptions.sort(() => { return 0.5 - Math.random() });

// const quizObject = {
//   question: randomQuestion,
//   quizes: randomQuizes,
//   answers: sortedQuizOptions,
//   correctAnswers: randomQuizes.name,
//   images: randomQuizes.flag,
//   capital: randomQuizes.capital,
//   userANswer: '',
//   isCorrect: false,
// }
// setQuizes([quizObject])
// }
// console.log(quizes);

// useEffect(() => {
// getcountries()
// }, [])
