import React from 'react';
import {Link} from 'react-router-dom';
import reward from '../images/reward.svg';

function Result({score, handleGoBackToHome}) {

  return (
      <section className="results">
        <div className='results--wrapper'><img className="results--img" src={reward} alt="reward"/></div>
        <div><h2 className="results__heading">Results</h2></div>
        <div>
          <p className="results--desc">You got <span className="results--score">{score}</span> correct answers</p>
        </div>
        <div className="results__btn--wrapper">
          <Link to="/"><button className="results__btn" onClick={handleGoBackToHome}>Try again</button></Link>
        </div>
      </section>
  )

}

export default Result;
