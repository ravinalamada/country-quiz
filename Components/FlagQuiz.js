import React, {useState, useEffect} from 'react';

function FlagQuiz() {
  const [quizes, setQuizes] = useState([]);

  async function getQuiz() {
    const res = await fetch('https://restcountries.eu/rest/v2/capital/tallinn');
    const data = await res.json();
    setQuizes(data)
    console.log(data);
  }

  useEffect(() => {
    getQuiz()
  }, []);

  return (
    <div>
      <h2>Which country does this flag belong to ?</h2>
      {quizes.map(quiz => (
        <div key={quiz.name}>
          <img src={quiz.flag}></img>
        </div>
      ))}
    </div>

  )
}

export default FlagQuiz;
