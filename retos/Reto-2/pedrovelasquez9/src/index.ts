const INPUT_TYPE_MESSAGE = {
    WORD: "La palabra",
    PHRASE: "La frase" 
}

const PALINDROME_MESSAGE = {
    IS_PALINDROME: "es un palíndromo",
    IS_NOT_PALINDROME: "no es un palíndromo" 
}

export const getFormattedText = (inputText: string):string => {
    const specialUnicodeRange = /[\u0300-\u036f]/g;
    const alphabetCharacterRange = /[^a-zA-Z]/g;

    const formattedText = inputText.normalize('NFD')
                                    .replace(specialUnicodeRange,"")
                                    .replace(alphabetCharacterRange,"")
                                    .toLowerCase();
    return formattedText;
};

export const validatePalindromeText = (text:string):boolean => {
    const reversedText = text.split("").reverse().join("");
    return text === reversedText;
};

export const isAPhrase = (text: string): boolean => {
    return text.trim().includes(" ");
}

export const confirmPalindrome = (text: string):string => {
    const isPhrase = isAPhrase(text);
    const formattedText = getFormattedText(text);
    const isPalindrome = validatePalindromeText(formattedText);
    const inputTypeMessage = isPhrase ? INPUT_TYPE_MESSAGE.PHRASE : INPUT_TYPE_MESSAGE.WORD;
    const isPalindromeMessage = isPalindrome ? PALINDROME_MESSAGE.IS_PALINDROME : PALINDROME_MESSAGE.IS_NOT_PALINDROME;
    return `${inputTypeMessage} ${isPalindromeMessage}`;
}