// import { assert } from 'chai';
import assert from 'node:assert/strict';
const regex = /[^A-ZÁ-ÿ-a-z0-9]/gi;

const normalizeInput = (input: string): string =>
  input
    .replace(regex, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const palindrome = (input: string): string => {
  const tipo = input.includes(' ') ? 'frase' : 'palabra';
  const _input = normalizeInput(input).toLowerCase();

  const output = _input.split('').reverse().join('').toLowerCase();
  return `La ${tipo} ${output === _input ? 'es' : 'no es'} un palíndromo`;
};

assert.deepEqual(
  palindrome('¿Acaso hubo búhos acá?'),
  'La frase es un palíndromo'
);
assert.deepEqual(palindrome('Ana'), 'La palabra es un palíndromo');
assert.deepEqual(palindrome('Frase random'), 'La frase no es un palíndromo');
assert.deepEqual(palindrome('Hola'), 'La palabra no es un palíndromo');
