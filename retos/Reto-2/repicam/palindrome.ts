//to test, run: 
//ts-node palindrome.ts word/sentence(opt)

const userInput: string = process.argv[2] || 'otto' //Input by default

export function palindrome(params: string): string {
  const isWord: boolean = params.split(' ').length === 1
  const finalString = params.normalize('NFD')
  .replace(/[\u0300-\u036f.,¡¿!?;:"' ]/g,"").trim().toLowerCase()

  return `The ${isWord ? 'word' : 'sentence'} \"${params}\" ${finalString === finalString.split("").reverse().join("") ? 'is' : "isn't"} a palidrome`
}

console.log(palindrome(userInput))