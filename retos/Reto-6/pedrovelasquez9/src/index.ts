import { INPUT_ERROR_MESSAGE } from "./constants";

export const isNoun = (number: number): boolean => {
    
    for(let i=2; i<number;i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

export const getNouns = (number:number): string => {
    if(number <= 1){
        return INPUT_ERROR_MESSAGE;
    }
    const nouns: number[] = [];
    for(let i = 2; i < number; i++){
        if(isNoun(i)){
            nouns.push(i);
        }
    }
    return nouns.toString();
}