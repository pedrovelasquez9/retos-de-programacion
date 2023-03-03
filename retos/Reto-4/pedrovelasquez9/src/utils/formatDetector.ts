import { DEFAULT_FORMAT, TextFormats } from "./constants"

export const getInputFormat = (inputText: string): string => {
    const inputFormat = TextFormats.filter(textFormat => {
        const {regex, format} = textFormat;
        if(inputText.match(regex)){
            return format;
        }
    }).map(formatObject => formatObject.format);

    return inputFormat.toString() || DEFAULT_FORMAT;
}