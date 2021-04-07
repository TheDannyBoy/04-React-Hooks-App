import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [state, setstate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (evt) => {
      setstate({ x: evt.x, y: evt.y });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])

  return (
    <>
      <h3>Eres genial!!</h3>
      <p>X: { state.x }</p>
      <p>Y: { state.y }</p>
    </>
  )
}
