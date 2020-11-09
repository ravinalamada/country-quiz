import React, {useState, useEffect} from 'react';
import Form from './Form';

function Capital() {
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
      {quizes.map(quiz => (
        <div key={quiz.capital}>
          <h2>{quiz.capital} is capital of</h2>
        </div>
      ))}
      <Form />
    </div>

  )
}

export default Capital;
