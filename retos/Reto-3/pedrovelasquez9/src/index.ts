import { formatters } from "./utils/caseFormatter";
import { Formats } from "./utils/constants";
import { getCleanText } from "./utils/textSanitizing";

export const caseTransformer = (text: string, format: Formats): string => {
    const cleanText: string = getCleanText(text);
    return formatters[format](cleanText);
};