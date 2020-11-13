import React from 'react';
import reward from '../images/reward.svg';


function Result({score}) {

  return (
      <section className="results">
        <div><img className="results-img" src={reward} alt="reward"/></div>
        <div><h2>Results</h2></div>
        <div>You got <h4>&nbsp;{score}&nbsp;</h4>correct answers</div>
        <div>
          <button className="results-btn">Try again</button>
        </div>
      </section>
  )

}

export default Result;
