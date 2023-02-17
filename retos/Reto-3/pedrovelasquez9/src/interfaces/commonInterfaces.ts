export type Formatter = (text: string) => string;

export interface FormatterObject {
    camel: Formatter,
    pascal: Formatter,
    snake: Formatter,
    kebab: Formatter
};