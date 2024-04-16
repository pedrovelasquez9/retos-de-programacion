const formatInput = require("../src/formatInput");

const palindrome = (input) => {
  if (!input) throw new Error("No has introducido ninguna palabra o frase.");

  if (typeof input !== "string")
    throw new Error("El tipo de dato introducido no es un string.");

  const isWord = (string) => string.split(" ").length == 1;

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

module.exports = palindrome;
