//to test, run: 
//ts-node secuenciaFibonacci.ts your-length(opt)

const userIterator: number = +process.argv[2] || 10 //iterator by default

//ITERATIVE SEQUENCE
function iterativeFibonacci(iterator: number): string{
  if (iterator < 2) return "1"

  let numberList: number[] = []
  let firstNumber: number = 0
  let secondNumber: number = 1

  for (let i = 0; i < iterator; i++){
    const addition: number = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = addition

    numberList.push(firstNumber)
  }

  return numberList.toString()
}
console.log("ITERATIVE SEQUENCE")
console.log(iterativeFibonacci(userIterator))


//RECURSIVE SEQUENCE
let fibonacciSequence: number[] = []
function recursiveFibonacci(iterator: number): number{
  if (iterator < 2) return 1
  return recursiveFibonacci(iterator-1) + recursiveFibonacci(iterator-2)  
}

for(let z = 0; z < userIterator; z++){
  fibonacciSequence.push(recursiveFibonacci(z))
}
console.log("RECURSIVE SEQUENCE")
console.log(fibonacciSequence.toString())