import React from 'react';
import {Link} from 'react-router-dom';
import reward from '../images/reward.svg';

function Result({score, handleGoBackToHome}) {

  return (
      <section className="results">
        <div><img className="results-img" src={reward} alt="reward"/></div>
        <div><h2>Results</h2></div>
        <div>You got <b>{score}</b> correct answers</div>
        <div>
          <Link to="/"><button className="results-btn" onClick={handleGoBackToHome}>Try again</button></Link>
        </div>
      </section>
  )

}

export default Result;
