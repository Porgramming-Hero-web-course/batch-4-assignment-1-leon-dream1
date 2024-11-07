"use strict";
const sumArray = (numbersArr) => {
    const sum = numbersArr.reduce((total, num) => total + num, 0);
    return sum;
};
// console.log(sumArray([1, 2, 3, 5]));
