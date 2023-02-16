export const getTextClean = (text: string): string => {
  const specialUnicodeRange = /[\u0300-\u036f]/g
  const allowedCharacters = /[^a-zA-Z' ']/g

  const result = text.normalize('NFD')
    .replace(specialUnicodeRange,"")
    .replace(allowedCharacters,"")
    .toLowerCase()
    .trim()

  return result
};

export const transformWordFirsCapitalLeter = (text: string): string => {
  const result = text[0].toUpperCase() + text.substring(1).toLowerCase()
  
  return result
}