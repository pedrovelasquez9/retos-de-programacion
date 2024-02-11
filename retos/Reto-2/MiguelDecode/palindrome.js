const isWord = (string) => string.split(" ").length == 1;

const formatInput = (string) => {
  const regexSymbols = /[.!¡?¿''"";:~]/gi;

  const formatInput = string
    .trim()
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(regexSymbols, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return formatInput;
};

const palindromo = (input) => {
  if (!input) throw new Error("No has introducido ninguna palabra o frase.");

  if (typeof input !== "string")
    throw new Error("El tipo de dato introducido no es un string.");

  if (isWord(input)) {
    // It's a word
    const word = formatInput(input);

    let reverseWord = word.split("").reverse().join("");

    return word === reverseWord
      ? "La palabra es un palíndromo"
      : "La palabra no es un palíndromo";
  } else {
    // It's a sentence
    const sentence = formatInput(input);

    let reverseSentence = sentence.split("").reverse().join("");

    return sentence === reverseSentence
      ? "La frase es un palíndromo"
      : "La frase no es un palíndromo";
  }
};

// console.log(palindromo());
// console.log(palindromo(33))
// console.log(palindromo([1, 2, 3]));

// console.log(palindromo("¿Acaso hubo búhos acá?"));
// console.log(palindromo("Ana"));
// console.log(palindromo("Frase random"));
// console.log(palindromo("Hola"));
