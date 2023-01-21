const utilities = require('./utilities');

test('limpiar caracteres especiales', () => {
  expect(utilities.cleanSentence('limpiar**')).toBe('limpiar');
});

test('limpiar tildes ÁÉÍÓÚ', () => {
  expect(utilities.cleanSentence('ÁÉÍÓÚ')).toBe('AEIOU');
});

test('("¿Acaso hubo búhos acá?")', () => {
  expect(utilities.palindrome("¿Acaso hubo búhos acá?")).toBe('La frase es un palíndromo');
});

test('("Ana")', () => {
  expect(utilities.palindrome("Ana")).toBe('La palabra es un palíndromo');
});

test('("Frase random")', () => {
  expect(utilities.palindrome("Frase random")).toBe('La frase no es un palíndromo');
});

test('("Hola")', () => {
  expect(utilities.palindrome("Hola")).toBe('La palabra no es un palíndromo');
});