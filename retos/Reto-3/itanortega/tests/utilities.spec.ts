import {describe, expect, test} from '@jest/globals'
import { getTextClean, transformWordFirsCapitalLeter } from '../src/utilities'

describe("Test of utilities", () => {
  test("Clean text", () => {
    expect(getTextClean('¿Es Esdrújula ?')).toBe('es esdrujula')
  });

  test("Transform word to first capital letter", () => {
    expect(transformWordFirsCapitalLeter('paLABRA')).toBe('Palabra')
  });
})