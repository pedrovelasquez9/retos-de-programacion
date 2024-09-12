/**
 * Formats a sentence by converting it to lowercase and removing non-alphabetic characters.
 *
 * @param {string} sentence - The input sentence to be formatted.
 * @returns {string} The formatted sentence containing only lowercase alphabetic characters.
 */
const formatSentence = (sentence) => {
  return sentence.toLowerCase().replace(/[^a-z]/g, "");
};

/**
 * Calculates the average occurrence of vowels in a given sentence.
 *
 * @param {string} sentence - The input sentence to analyze.
 * @throws {Error} If the input is empty or not a string.
 * @returns {Object} An object containing the average occurrence of each vowel.
 */
const averageVowels = (sentence) => {
  const vowelCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  
 class ArgumentError extends Error{
   constructor(message) {
     super(message)
     this.name = 'ArgumentError'
   }
 } 

  if (!sentence)
    throw new ArgumentError(
      "Debes ingresar una frase o palabra para contar su vocales.",
    );

  if (typeof sentence !== "string")
    throw new ArgumentError("Solo se admite un string como tipo de dato válido.");

  formattedString = formatSentence(sentence);

  for (const vowel of formattedString) {
    if (vowel in vowelCount) {
      vowelCount[vowel]++;
    }
  }

  const totalVowels = Object.values(vowelCount).reduce(
    (sum, count) => sum + count,
    0,
  );

  const averageVowels = Object.fromEntries(
    Object.entries(vowelCount).map(([vowel, count]) => [
      vowel,
      count / totalVowels,
    ]),
  );

  return averageVowels;
};

module.exports = averageVowels;
