"use strict";
const removeDuplicates = (numArray) => {
    const uniqueArr = [];
    numArray.forEach((num) => {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    });
    return uniqueArr;
};
// console.log(removeDuplicates([1, 1, 1, 1, 1]));
