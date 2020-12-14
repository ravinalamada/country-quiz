import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../ContextProvider';

function Buttons({handleNextBtn, value}) {

  const { isCorrect }= useContext(Context);

    return (
    <div className="nextBtn--container">
      {isCorrect
       ? <button className="nextBtn" onClick={handleNextBtn} value={value}>Next</button>
       : <Link to="/result"><button className="nextBtn" value={value}>Next</button></Link>
      }
    </div>
    )
  }

export default Buttons;
