import {describe, expect, test} from '@jest/globals'
import { TYPE_TRANSFORM, caseTransformer } from '../src/index'

describe("Challenge test", () => { 
  test("Transform word to first capital letter", () => {
    expect(caseTransformer("hola mundo", TYPE_TRANSFORM.SNAKE)).toBe('hola_mundo')
  });

  test("Transform word to first capital letter", () => {
    expect(caseTransformer("hola mundo", TYPE_TRANSFORM.KEKAB)).toBe('hola-mundo')
  });

  test("Transform word to first capital letter", () => {
    expect(caseTransformer("hola mundo", TYPE_TRANSFORM.PASCAL)).toBe('HolaMundo')
  });

  test("Transform word to first capital letter", () => {
    expect(caseTransformer("hola mundo", TYPE_TRANSFORM.CAMEL)).toBe('holaMundo')
  });
})