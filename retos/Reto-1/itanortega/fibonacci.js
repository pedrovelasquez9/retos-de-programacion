function fibonacci(cantidad) {
    let result = "";
    let previusNumber = 0;
    let currentNumber = 1;
    let temporaryNumber = 0;

    result += currentNumber;
    for(i = 2; i<=cantidad; i++) {
      temporaryNumber = previusNumber + currentNumber;
      previusNumber = currentNumber;
      currentNumber = temporaryNumber;
      
      result += "," + currentNumber;
    }

    return result;
  }
  module.exports = fibonacci;