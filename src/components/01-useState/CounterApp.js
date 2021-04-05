import React, { useState } from 'react';
import './counter.css';

export const CounterApp = ({ initialCounter = 10 }) => {
  const [{ counter1, counter2 }, setCounter] = useState({
    counter1: initialCounter,
    counter2: initialCounter
  });

  return (
    <>
     <h1>Counter1 { counter1 }</h1>
     <h1>Counter2 { counter2 }</h1>
     <button
      className='btn btn-primary'
      onClick={() => setCounter(cnt => ({
        ...cnt,
        counter1: cnt.counter1 + 1,
      }))}
    >
      +1
    </button>
    </>
  )
}
