export const INVALID_ROMAN_NUM_ERROR = `El número romano ingresado no es válido`;
export const MAX_NUMBER_LIMIT_ERROR = `Ingresa un número romano menor a 3000`;
export const MAX_NUMBER = 3000;

const RomanNumbers: {[key: string]: number} = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

export const isInvalidRomanNumber = (romanNumber: Array<string>): boolean => {
    const validationArray = romanNumber.map((romanNumber: string) => !!RomanNumbers[romanNumber] )
    return validationArray.includes(false);
};

export const splitInputString = (romanNumber: string): Array<string> => {
    return romanNumber.split("");
};

export const transformRomanToInt = (romanNumber: string): number | string => {
    let intNumber: number = 0;
    const romanNumberArray = splitInputString(romanNumber.toUpperCase());

    if(isInvalidRomanNumber(romanNumberArray)){
        return INVALID_ROMAN_NUM_ERROR;
    };

    romanNumberArray.forEach((actualNumber, index, originalArray) => {
        const nextNumber = originalArray[index+1];
        RomanNumbers[actualNumber] < RomanNumbers[nextNumber] ? intNumber -= RomanNumbers[actualNumber] : intNumber += RomanNumbers[actualNumber];
    });

    if(intNumber > MAX_NUMBER){
        return MAX_NUMBER_LIMIT_ERROR;
    }

    return intNumber;
}