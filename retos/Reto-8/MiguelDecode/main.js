const getMedia = (numberList) => {
  const total = numberList.reduce((prev, curr) => prev + curr, 0);
  return total / numberList.length;
};

const getMediana = (numberList) => {
  const sortList = numberList.sort();

  const middleIndex = Math.floor(numberList.length / 2);

  if (sortList.length % 2 === 0) {
    return (numberList[middleIndex] + numberList[middleIndex - 1]) / 2;
  } else {
    return numberList[middleIndex];
  }
};

const getModa = (numberList) => {
  let control = {};

  //  Go through array and control how many times appear each number.
  numberList.forEach((num) => {
    control[num] ? control[num]++ : (control[num] = 1);
  });

  // Take only the max values in the object control to show which are max repeated.
  let maxRepeatTimes = Math.max(...Object.values(control));

  // Return only the numbers which has the same index of maxRepatTimes.
  let moda = Object.keys(control).filter(
    (num) => control[num] === maxRepeatTimes
  );

  return moda;
};

const calculateStadistics = (numberList) => {
  if (numberList.length < 1)
    return `La lista de números debe contener al menos un valor.`;

  if (!(numberList instanceof Array))
    return `No has pasado una lista de de números.`;

  for (let i = 0; i < numberList.length; i++) {
    if (typeof numberList[i] !== "number")
      return `El valor ${numberList[i]} de la lista no es un número.`;
  }

  const average = getMedia(numberList);

  const middle = getMediana(numberList);

  const mostCommon = getModa(numberList);

  return {
    average,
    middle,
    mostCommon,
  };
};

const case1 = calculateStadistics([]);
const case2 = calculateStadistics(true);
const case3 = calculateStadistics("Hello World");
const case4 = calculateStadistics([1, 2, 3, "4", 5, 6]);
const case5 = calculateStadistics([1, 2, 3, 4, 5]);
const case6 = calculateStadistics([1, 2, 3, 4, 2, 8, 2, 9]);
const case7 = calculateStadistics([23, 12, 89, 54, 21, 12, 47, 54]);

console.log(case7);
