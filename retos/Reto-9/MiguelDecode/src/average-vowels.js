const formatSentence = (sentence) => {
  sentence = sentence.toLowerCase();

  let specials = /[^a-z]/g;

  return sentence.replaceAll(specials, "");
};

const averageVowels = (sentence) => {
  const vowelCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  if (!sentence)
    throw new Error(
      "Debes ingresar una frase o palabra para contar su vocales."
    );

  if (typeof sentence !== "string")
    throw new Error("Solo se admite un string como tipo de dato válido.");

  formattedString = formatSentence(sentence);

  for (const vowel of formattedString) {
    switch (vowel) {
      case "a":
        vowelCount.a++;
        break;

      case "e":
        vowelCount.e++;
        break;

      case "i":
        vowelCount.i++;
        break;

      case "o":
        vowelCount.o++;
        break;

      case "u":
        vowelCount.u++;
        break;
    }
  }

  const totalVowels =
    vowelCount.a + vowelCount.e + vowelCount.i + vowelCount.o + vowelCount.u;

  const averageVowels = {
    a: vowelCount.a / totalVowels,
    e: vowelCount.e / totalVowels,
    i: vowelCount.i / totalVowels,
    o: vowelCount.o / totalVowels,
    u: vowelCount.u / totalVowels,
  };

  return averageVowels;
};

module.exports = averageVowels;
