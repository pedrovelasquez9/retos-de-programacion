export const DEFAULT_MESSAGE = "No se ha reconocido el formato";

export enum Formats {
    CAMEL = "camel",
    PASCAL = "pascal",
    SNAKE = "snake",
    KEBAB = "kebab"
};

export const TextFormats = [
    {
        format: Formats.SNAKE,
        regex: "^[a-z]+(_[a-z]+)*$"
    },
    {
        format: Formats.CAMEL,
        regex: "^[a-z]+([A-Z][a-z]+)*$"
    },
    {
        format: Formats.KEBAB,
        regex: "^[a-z]+(-[a-z]+)*$"
    },
    {
        format: Formats.PASCAL,
        regex: "^([A-Z][a-z]+)+$"
    }
];

export const DEFAULT_FORMAT = "default";