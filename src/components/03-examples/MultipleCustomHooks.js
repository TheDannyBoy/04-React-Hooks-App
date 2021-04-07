import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad posts</h1>
      <hr/>

      { loading ?
        <div className="alert alert-info">
          Loading...
        </div>
        :
        <blockquote className='blockquote text-right'>
          <p className='mb-100'>{ quote }</p>
          <footer className='blockquote-footer'>{ author }</footer>
        </blockquote>
      }

      <button className='btn btn-primary' onClick={() => increment()}>Next Quote</button>
    </div>
  )
}
