import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
  
  const inputRef= useRef();

  const handleClick = (e) => {
    // document.querySelector('input').select();
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='Your name'/>
      <button
        className='btn btn-outline-primary mt-3'
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  )
}
