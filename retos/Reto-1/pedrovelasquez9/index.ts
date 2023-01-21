const iterations: number = 10;
const sequence: number[] = [];

// Iterative cycle
const fibonacci = (): number[] => {
  let prevNum: number[] = [];
  let actualNum: number = 1;
  if(iterations < 2){
    return [1];
  }

  for(let i = 0;i<iterations;i++){
    prevNum.push(actualNum);
    if(i>0){
      actualNum = actualNum + prevNum[i-1];
    }
  }
  return prevNum;
}

console.log(fibonacci());

// Recursive cycle
const fibonacciRecursive = (sequence:number[]):number[] => {
  sequence.length < 2 ? sequence.push(1) : sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
  if(sequence.length === iterations){
    return sequence;
  }
  return fibonacciRecursive(sequence);
}

console.log(fibonacciRecursive(sequence));

