import {describe, expect, test} from '@jest/globals';
import { caseTransformer} from '../src/index';
import { Formats } from '../src/utils/constants';
import { getCleanTextFromFormat } from './../src/utils/textSanitizing';

const camelCaseStringInput: string = `holaMundo`;
const snakeCaseStringInput: string = `hola_mundo`;
const pascalCaseStringInput: string = `HolaMundo`;
const singleWordInput: string = `hola`;

describe("Test with different inputs for Camel Case", () => {
    test("Should return sentence in Camel Case", () => {
        const formattedText = caseTransformer(camelCaseStringInput, Formats.CAMEL);
        expect(formattedText).toBe(`el texto recibido está en camel y es: ${camelCaseStringInput}`);
    });

    test("Should return sentence in Camel Case from snake case", () => {
        const textOriginalFormat: string = Formats.SNAKE;
        const format: string = Formats.CAMEL;
        
        const transformationResult = caseTransformer(snakeCaseStringInput, Formats.CAMEL);
        const expectedMessage:string = `el texto recibido se ha transformado de ${textOriginalFormat} a ${format}: ${camelCaseStringInput}`; 
        expect(transformationResult).toBe(expectedMessage);
    });

    test("Should return sentence in Camel Case from pascal case", () => {
        const textOriginalFormat: string = Formats.CAMEL;
        const format: string = Formats.PASCAL;
        const formattedText = caseTransformer(camelCaseStringInput, Formats.PASCAL);
        const expectedMessage:string = `el texto recibido se ha transformado de ${textOriginalFormat} a ${format}: ${pascalCaseStringInput}`; 
        expect(formattedText).toBe(expectedMessage);
    });
});

describe("Should clean pascal and camel case", () => {
    const PASCAL_TEXT = "HolaMundo";
    const CAMEL_TEXT = "holaMundo";
    test("Should clean pascal case", () => {
        const cleanPascal = getCleanTextFromFormat.pascal(PASCAL_TEXT);
        expect(cleanPascal).toBe("Hola Mundo");
    })

    test("Should clean camel case", () => {
        const cleanCamel = getCleanTextFromFormat.camel(CAMEL_TEXT);
        expect(cleanCamel).toBe("hola Mundo");
    })
    
})
