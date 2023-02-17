import { FormatterObject } from "../interfaces/commonInterfaces";

export const formatters: FormatterObject = {
    camel: (text:string): string => {
        const splittedText = text.split(" ");
        return splittedText.map((word:string, index:number) => 
             index>0 ? word = word[0].toUpperCase()+word.slice(1) : word
        ).join("");
    },
    pascal: (text:string): string => {
        const splittedText = text.split(" ");
        return splittedText.map((word:string) => 
             word = word[0].toUpperCase() + word.slice(1)
        ).join("");
    },
    snake: (text:string): string => {
        return text.split(" ").join("_");
    },
    kebab: (text:string): string => {
        return text.split(" ").join("-");
    }
};
