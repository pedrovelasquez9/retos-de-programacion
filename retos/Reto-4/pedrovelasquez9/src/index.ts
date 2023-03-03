import { formatters } from "./utils/caseFormatter";
import { Formats } from "./utils/constants";
import { getCleanText, getCleanTextFromFormat } from "./utils/textSanitizing";
import { getInputFormat } from './utils/formatDetector';

export const caseTransformer = (inputText: string, format: Formats): string => {
    const textOriginalFormat: string = getInputFormat(inputText);
    if(textOriginalFormat === format){
        return `el texto recibido está en ${format} y es: ${inputText}`;
    };
    
    const cleanFormatText: string = getCleanTextFromFormat[textOriginalFormat](inputText);
    const cleanText: string = getCleanText(cleanFormatText);
    const transformedText: string = formatters[format](cleanText);
    return `el texto recibido se ha transformado de ${textOriginalFormat} a ${format}: ${transformedText}`;
};

