import React from 'react';

function Form() {

  return (
    <form className='form'>
      <div className='inputGroup' role='radiogroup'>
        <label id='label' htmlFor='radioTrue' className='container'>
          <input id='radioTrue'
                 name='radio'
                 type='radio'
                />
            True
          <span className='checkmark'></span>
        </label>
      </div>
      <div className='inputGroup' role='radiogroup'>
        <label
          id='label'
          htmlFor='radioFalse'
          className='container'>
            <input id='radioFalse'
              name='radio'
              type='radio' />
          False
          <span className='checkmark'></span>
        </label>
    </div>
    </form>
    )
  }
export default Form;
