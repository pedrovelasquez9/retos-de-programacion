import { describe, expect, test } from '@jest/globals';
import formatCase from '../src';
import EFormats from '../src/enums/EFormats';

describe('Testing camelCase', () => {
  const expected = 'holaMundo';
  const expected2 = 'hol4Mund0';
  const format = EFormats.CAMEL;

  test('Test with non-alphanumerics', () => {
    const output = formatCase('hola.-?!#$"#%"_mundo?', format);

    expect(output).toBe(expected);
  });

  test('Test with spaces', () => {
    const output = formatCase('hola        mundo        ', format);

    expect(output).toBe(expected);
  });

  test('Test with non-alphanumerics and Upper Cases and Numbers', () => {
    const output = formatCase('HOL4 .-?!#$  "#%"_MUnD0?', format);

    expect(output).toBe(expected2);
  });
});

describe('Testing PascalCase', () => {
  const expected = 'HolaMundo';
  const expected2 = 'Hol4Mund0';
  const format = EFormats.PASCAL;
  test('Test with non-alphanumerics', () => {
    const output = formatCase('hola.-?!#$"#%"_mundo?', format);

    expect(output).toBe(expected);
  });

  test('Test with spaces', () => {
    const output = formatCase('hola        mundo        ', format);

    expect(output).toBe(expected);
  });

  test('Test with non-alphanumerics and Upper Cases and Numbers', () => {
    const output = formatCase('HOL4 .-?!#$  "#%"_MUnD0?', format);

    expect(output).toBe(expected2);
  });
});

describe('Testing snake_case', () => {
  const expected = 'hola_mundo';
  const expected2 = 'hol4_mund0';
  const format = EFormats.SNAKE;
  test('Test with non-alphanumerics', () => {
    const output = formatCase('hola.-?!#$"#%"_mundo?', format);

    expect(output).toBe(expected);
  });

  test('Test with spaces', () => {
    const output = formatCase('hola        mundo        ', format);

    expect(output).toBe(expected);
  });

  test('Test with non-alphanumerics and Upper Cases and Numbers', () => {
    const output = formatCase('HOL4 .-?!#$  "#%"_MUnD0?', format);

    expect(output).toBe(expected2);
  });
});

describe('Testing kebab-case', () => {
  const expected = 'hola-mundo';
  const expected2 = 'hol4-mund0';
  const format = EFormats.KEBAB;
  test('Test with non-alphanumerics', () => {
    const output = formatCase('hola.-?!#$"#%"_mundo?', format);

    expect(output).toBe(expected);
  });

  test('Test with spaces', () => {
    const output = formatCase('hola        mundo        ', format);

    expect(output).toBe(expected);
  });

  test('Test with non-alphanumerics and Upper Cases and Numbers', () => {
    const output = formatCase('HOL4 .-?!#$  "#%"_MUnD0?', format);

    expect(output).toBe(expected2);
  });
});
