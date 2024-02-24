const formatString = (string) => {
  const regexSymbols = /[.!¡?¿''"";:~^%$#@(){}]/gi;

  const formatInput = string
    .toLowerCase()
    .trim()
    .replaceAll(regexSymbols, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return formatInput;
};

const isWord = (string) => string.split(" ").length == 1;

const capitalizeWord = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);

// Functions to Format Cases

const formatToSnakeCase = (string) => formatString(string).split(" ").join("_");

const formatToKebabCase = (string) => formatString(string).split(" ").join("-");

const formatToCamelCase = (string) => {
  let result = [];

  formatString(string)
    .split(" ")
    .forEach((word, index) => {
      index === 0 ? result.push(word) : result.push(capitalizeWord(word));
    });

  return result.join("");
};

const formatToPascalCase = (string) => {
  let result = [];

  formatString(string)
    .split(" ")
    .forEach((word) => result.push(capitalizeWord(word)));

  return result.join("");
};

const formatSelector = {
  snake: formatToSnakeCase,
  kebab: formatToKebabCase,
  camel: formatToCamelCase,
  pascal: formatToPascalCase,
};

// Detect Format Case of Input

const detectFormatCase = (string) => {
  if (string === formatToSnakeCase(string)) {
    return "snake";
  } else if (string === formatToKebabCase(string)) {
    return "kebab";
  } else if (string === formatToCamelCase(string)) {
    return "camel";
  } else if (string === formatToPascalCase(string)) {
    return "pascal";
  } else {
    return "sin formato";
  }
};

const caseTransformer = (string, format) => {
  if (
    format !== "camel" &&
    format !== "snake" &&
    format !== "pascal" &&
    format !== "kebab"
  )
    return "No has introducido un tipo de formato de case válido";

  if (!string) return "No has introducido un string a transformar";

  if (typeof string !== "string")
    return "No has introducido una palabra o frase.";

  // Si se pide el mismo formato que ya tiene, no aplicar transformaciones y retornar el valor ingresado.

  const formatCase = detectFormatCase(string);

  // Equal format input to desire with only a word
  if (
    (formatCase === "camel" ||
      formatCase === "snake" ||
      formatCase == "kebab") &&
    isWord(string)
  )
    return `El texto recibido tiene el mismo formato que el deseado: ${string}`;

  // Equal format input to desire with a sentence
  if (formatCase === format)
    return `El texto recibido tiene el mismo formato que el deseado: ${string}`;

  return `El texto recibido se ha transformado de ${capitalizeWord(
    formatCase
  )} a ${capitalizeWord(format)} Case : ${formatSelector[format](string)}`;

  // En la respuesta de la función debe indicarse el case original del texto tranformado.  // Indicar también el caso en el que el texto no tuviese un formato conocido (ninguno de los cuatro)
};

const case1 = caseTransformer("", "camel");
const case2 = caseTransformer([1, 2, 3], "camel");
const case3 = caseTransformer(true, "camel");
const case4 = caseTransformer("hola", "camel");
const case5 = caseTransformer("Hola", "pascal");
const case6 = caseTransformer("hola", "snake");
const case7 = caseTransformer("hola", "kebab");
const case8 = caseTransformer("holaMundo", "snake");
const case9 = caseTransformer("hola mundo", "snake");
const case10 = caseTransformer("hola mundo", "camel");
const case11 = caseTransformer("hola mundo", "kebab");
const case12 = caseTransformer("hola mundo", "pascal");

const case13 = caseTransformer("holaMundo", "snake");
const case14 = caseTransformer("hola mundo", "kebab");

console.log(case14);
