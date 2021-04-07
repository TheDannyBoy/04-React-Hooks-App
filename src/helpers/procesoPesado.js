export const procesoPesado = (iterations) => {
  for (let index = 0; index < iterations; index++) {
    console.log('Ahí vamos...');
  }

  return `${ iterations } iteraciones realizadas`;
};
