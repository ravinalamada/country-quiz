import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../ContextProvider';

function Buttons({handleNextBtn, handleShowResult}) {

  const { isCorrect }= useContext(Context);

    return (
    <>
      {isCorrect
       ? <button onClick={handleNextBtn}>True</button>
       : <Link to="/result"><button onClick={handleShowResult}>False</button></Link>
      }
    </>
    )
  }

export default Buttons;
