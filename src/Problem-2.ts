const removeDuplicates = (numArray: number[]): number[] => {
  const uniqueArr: number[] = [];

  numArray.forEach((num) => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });

  return uniqueArr;
};

// console.log(removeDuplicates([1, 1, 1, 1, 1]));
