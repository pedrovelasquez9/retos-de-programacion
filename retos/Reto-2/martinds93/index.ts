const regex = /[^A-ZÁ-ÿ-a-z0-9]/gi;

const normalizeInput = (input: string): string =>
  input
    .replace(regex, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const palindromeMds = (input: string): string => {
  const tipo = input.includes(' ') ? 'frase' : 'palabra';
  const _input = normalizeInput(input).toLowerCase();

  const output = _input.split('').reverse().join('').toLowerCase();
  return `La ${tipo} ${output === _input ? 'es' : 'no es'} un palíndromo`;
};

const inputPorComando = process.argv[2];
console.log(inputPorComando, '==>', palindromeMds(inputPorComando));

export default palindromeMds;
