const formatInput = (input) => {
  const regexSymbols = /[.!¡?,¿''""@=/|;:~]/gi;

  const formatInput = input
    .trim()
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(regexSymbols, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return formatInput;
};

module.exports = formatInput;
