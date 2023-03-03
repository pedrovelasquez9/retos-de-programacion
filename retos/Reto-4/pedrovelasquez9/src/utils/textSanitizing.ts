import {FormatterObject} from "../interfaces/commonInterfaces";

export const getCleanText = (inputText: string):string => {
    const specialUnicodeRange = /[\u0300-\u036f]/g;
    const alphabetCharacterRange = /[^a-zA-Z ]/g;

    const formattedText = inputText.normalize('NFD')
                                    .replace(specialUnicodeRange,"")
                                    .replace(alphabetCharacterRange,"")
                                    .toLowerCase();
    return formattedText;
};

export const getCleanTextFromFormat: FormatterObject = {
    pascal: (inputText: string):string => {
        return inputText.replace(/([a-z])([A-Z])/g, "$1 $2");
    },
    camel: (inputText: string):string => {
        return inputText.replace(/([a-z])([A-Z])/g, "$1 $2");
    },
    kebab: (inputText: string):string => {
        return inputText.replace(/-/g, " ");
    },
    snake: (inputText: string):string => {
        return inputText.replace(/_/g, " ");
    }
}