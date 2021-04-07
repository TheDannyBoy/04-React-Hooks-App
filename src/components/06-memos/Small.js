import React, { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('I\'m being called again');

  return (
    <small>{ value }</small>
  )
})
