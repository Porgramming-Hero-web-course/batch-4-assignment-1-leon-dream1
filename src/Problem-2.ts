//[1, 2, 2, 3, 4, 4, 5]
const removeDuplicates = (numArray: number[]): number[] => {
  const uniqueArr: number[] = [];

  numArray.forEach((num) => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });

  return uniqueArr;
};

console.log(removeDuplicates([1, 1, 1, 1, 1]));
