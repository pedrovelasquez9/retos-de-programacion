export type Formatter = (text: string) => string;

export interface FormatterObject {
    [key:string]: Formatter
};