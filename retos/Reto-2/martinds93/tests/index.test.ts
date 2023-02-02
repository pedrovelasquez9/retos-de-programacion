import assert from 'node:assert/strict';
import palindromeMds from '..';

assert.deepEqual(
  palindromeMds('¿Acaso hubo búhos acá?'),
  'La frase es un palíndromo'
);
console.log('1er test OK | 1/4');

assert.deepEqual(palindromeMds('Ana'), 'La palabra es un palíndromo');
console.log('2do test OK | 2/4');

assert.deepEqual(palindromeMds('Frase random'), 'La frase no es un palíndromo');
console.log('3er test OK | 3/4');

assert.deepEqual(palindromeMds('Hola'), 'La palabra no es un palíndromo');
console.log('4to test OK | 4/4');

console.log('========================');
console.log('Todo salio OK');
