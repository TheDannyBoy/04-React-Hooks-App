import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

  const { state:counter, increment, decrement, reset } = useCounter();

  return (
    <>
     <h1>Counter with Hook: { counter }</h1>
     <hr />

    <button className="btn btn-primary" onClick={ () => increment(1) }>+1</button>
    <button className="btn btn-secondary" onClick={reset}>Reset</button>
    <button className="btn btn-secondary" onClick={ () => decrement(1) }>-1</button>
    </>
  )
}
