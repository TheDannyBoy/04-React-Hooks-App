import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {
  const [boxSize, setBoxSize] = useState({});
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];

  const paragraphRef = useRef();

  useLayoutEffect(() => {
    setBoxSize(paragraphRef.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr/>

      <blockquote className='blockquote text-right'>
        <p ref={paragraphRef} className='mb-100'>{ quote }</p>
      </blockquote>

      <pre>{ JSON.stringify(boxSize, null, 3) }</pre>

      <button className='btn btn-primary' onClick={() => increment()}>Next Quote</button>
    </div>
  )
}
