export const getCleanText = (inputText: string):string => {
    const specialUnicodeRange = /[\u0300-\u036f]/g;
    const alphabetCharacterRange = /[^a-zA-Z ]/g;

    const formattedText = inputText.normalize('NFD')
                                    .replace(specialUnicodeRange,"")
                                    .replace(alphabetCharacterRange,"")
                                    .toLowerCase();
    return formattedText;
};