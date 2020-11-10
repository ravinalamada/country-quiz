import {useState, useEffect} from 'react';

function useQuiz() {
    const [quizes, setQuizes ] = useState([]);
    const [randomCountry, setRandomCountry] = useState({});
    const [randomOptions, setRandomOptions] = useState([]);
    const [isCorrect, setIsCorrect] = useState('');
    const [score, setScore] = useState(0)
    const [bgColor, setBgColor] = useState({backgroundColor: 'white'});
    const [isDisabledFieldset, setIsDisabledFieldset] = useState(false);

    async function getQuizes() {
      const endpoint = "https:restcountries.eu/rest/v2/all" ;
      const res = await fetch(endpoint);
      const data = await res.json();
      setQuizes(data);
  }

  useEffect(() => {
    getQuizes()
  }, [])

  function getRandomCountry() {
      const random = quizes[Math.floor(Math.random() * quizes.length)];
      const randomOpt1 = quizes[Math.floor(Math.random() * quizes.length)];
      const randomOpt2 = quizes[Math.floor(Math.random() * quizes.length)];
      const randomOpt3 = quizes[Math.floor(Math.random() * quizes.length)];
      const randomOptions = [random.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
      randomOptions.sort(() => { return 0.5 - Math.random() });
      setRandomCountry(random);
      setRandomOptions(randomOptions)
      setIsCorrect('')
      setIsDisabledFieldset(false)
  }

  function checkAnswer(e) {
      setIsDisabledFieldset(true)
      const winCountry = randomCountry.name;
      const userGuess = e.target.value;
      if (winCountry === userGuess) {
          setIsCorrect('win')
          setScore((prev) => prev + 1)
          setBgColor({backgroundColor: '#81C784'})
      } else {
       setIsCorrect('Lose')
       setBgColor({backgroundColor: '#FF8A65'})
      }
      setTimeout(()=>{
          getRandomCountry();
          setIsCorrect('')
          setIsDisabledFieldset(false)
          setBgColor({backgroundColor: 'white'})
      }, 2000)

  }

  return [randomOptions, randomCountry, isDisabledFieldset, bgColor, score, isCorrect, getRandomCountry, checkAnswer]

}

export default useQuiz;
