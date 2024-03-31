const isWord = (string) => string.split(" ").length == 1;

const formatInput = (string) => {
  const regexSymbols = /[.!¡?¿''"";:~]/gi;

  const formatInput = string
    .trim()
    .toLowerCase()
    .replaceAll(regexSymbols, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return formatInput;
};

const formatToSnakeCase = (string) => string.split(" ").join("_");

const formatToCamelCase = (string) => {
  let arr = [];

  string.split(" ").forEach((el, index) => {
    if (index === 0) {
      arr.push(el);
    } else {
      arr.push(capitalizeWord(el));
    }
  });

  return arr.join("");
};

const formatToKebabCase = (string) => string.split(" ").join("-");

const capitalizeWord = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);

const formatToPascalCase = (string) => {
  let arr = [];
  string.split(" ").forEach((word) => {
    arr.push(capitalizeWord(word));
  });

  return arr.join("");
};

const caseTransformer = (input, caseFormat) => {
  let validCaseFormat = ["camel", "pascal", "snake", "kebab"];

  if (!input) throw new Error("You must introduce a word or a sentence");

  if (!caseFormat) throw new Error("You must to introduce a case format value");

  if (!validCaseFormat.includes(caseFormat))
    throw new Error("You must insert a correct value of caseFormat");

  let result = "";

  let string = formatInput(input);

  if (isWord(string)) {
    // It's a word
    switch (caseFormat) {
      case "camel":
        result = string;
        break;

      case "pascal":
        result = string[0].toUpperCase() + string.slice(1);
        break;

      case "snake":
        result = string;
        break;

      case "kebab":
        result = string;
        break;
    }
  } else {
    // It's a sentence
    switch (caseFormat) {
      case "camel":
        result = formatToCamelCase(string);
        break;

      case "snake":
        result = formatToSnakeCase(string);
        break;

      case "pascal":
        result = formatToPascalCase(string);
        break;

      case "kebab":
        result = formatToKebabCase(string);
        break;
    }
  }

  return result;
};

module.exports = caseTransformer;
