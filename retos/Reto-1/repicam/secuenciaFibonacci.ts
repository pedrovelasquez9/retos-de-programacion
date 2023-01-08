//to test, run: 
//ts-node secuenciaFibonacci.ts your-length(opt)

const userIterator: number = +process.argv[2] || 10 //iterator by default

function generateFibonacci(iterator: number): string{
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

console.log(generateFibonacci(userIterator))