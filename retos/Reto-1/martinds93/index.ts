import fs from 'fs';
import { assert } from 'chai';
import cache from './cache/cache.json';
import path from 'path';

const getLowerSequenceFromCache = (iterationsInput: number): Number[] => {
  let attributes = Object.keys(cache);
  if (!attributes.length) return [];
  let lowestDif = {
    index: attributes[0],
    diff: Math.abs(iterationsInput - Number(attributes[0])),
  };

  attributes.forEach((att) => {
    const diff = Math.abs(iterationsInput - Number(att));
    // console.log('MARTIN_LOG=>', { att,attNumber:Number(att),iterationsInput, diff, lowestDif });
    if (Number(att) < iterationsInput && diff < lowestDif.diff) {
      lowestDif = {
        index: att,
        diff,
      };
    }
  });

  return cache[lowestDif.index] ?? [1];
};

const fibonacciSequence = (iterationsInput: number): Number[] => {
  let resultFromCache: Number[] | undefined = cache[iterationsInput];
  if (resultFromCache) {
    // trae los datos desde una cache.json
    return resultFromCache;
  }

  if ([0, 1].includes(iterationsInput)) return [1];

  // obtenemos datos desde la cache, basandonos en la diferencia entre el input y lo que hay guardado en la cache
  // y traemos aquel que tenga la menor diferencia
  const output: Number[] = getLowerSequenceFromCache(iterationsInput);
  // le quitamos a las iteracciones aquellas que no necesitamos que haga porque ya existen esos calculos resueltos
  const iterations = iterationsInput - output.length;

  const initValue = output[output.length - 1];
  const previous = output.length > 1 ? output[output.length - 2] : 0;

  const fibo = ({ iterations, value, previous }) => {
    const newValue = previous + value;
    output.push(newValue);
    return iterations > 1
      ? fibo({ iterations: iterations - 1, value: newValue, previous: value })
      : value;
  };

  fibo({ iterations, value: initValue, previous });

  fs.writeFileSync(
    path.resolve(__dirname, './cache/cache.json'),
    JSON.stringify({ ...cache, [`${iterationsInput}`]: output }, null, 2)
  );
  return output;
};

assert.deepEqual(fibonacciSequence(1), [1]);
assert.deepEqual(fibonacciSequence(0), [1]);
assert.deepEqual(fibonacciSequence(5), [1, 1, 2, 3, 5]);
assert.deepEqual(fibonacciSequence(7), [1, 1, 2, 3, 5, 8, 13]);
assert.deepEqual(fibonacciSequence(8), [1, 1, 2, 3, 5, 8, 13, 21]);
