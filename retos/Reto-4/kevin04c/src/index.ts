type Formats = "camelCase" | "snakeCase" | "pascalCase"
  | "kebabCase"


export const caseTransformer = (words: string, format: Formats) => {

  const wordInArray = words.split(" ");

  switch (format) {
    case "kebabCase":
      return kebabCase(wordInArray)
    case "snakeCase":
      return snakeCase(wordInArray)
    case "pascalCase":
      return pascalCase(wordInArray)
    case "camelCase": 
      return camelCase(wordInArray) 
    default:
      words;
  }

}

const kebabCase = (word: string[]) => {
  return word.join("-")
}
const snakeCase = (word: string[]) => {
  return word.join("_")
}

const pascalCase = (word: string[]) => {
  const pascalCaseInArray = word.map(w => w[0].toUpperCase() + w.slice(1))
  return pascalCaseInArray.join("")
}

const camelCase = (word: string []) =>{ 
  const camelCaseInArray = word.map((w, i) => {
    if(i !== 0) {
      return w[0].toUpperCase() + w.slice(1)
    }
    return w
  })
  return camelCaseInArray.join("")
}


caseTransformer("hola mundo cruel", "kebabCase")// hola-mundo-cruel