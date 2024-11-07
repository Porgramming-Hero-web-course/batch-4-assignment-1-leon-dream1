


const sumArray = (numbersArr: number[]): number => {
  const sum = numbersArr.reduce(
    (total: number, num: number): number => total + num,
    0
  );
  return sum;
};

// console.log(sumArray([1, 2, 3, 5]));