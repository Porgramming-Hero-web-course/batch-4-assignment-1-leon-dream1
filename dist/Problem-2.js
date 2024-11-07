"use strict";
//[1, 2, 2, 3, 4, 4, 5]
const removeDuplicates = (numArray) => {
    const uniqueArr = [];
    numArray.forEach((num) => {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    });
    return uniqueArr;
};
console.log(removeDuplicates([1, 1, 1, 1, 1]));
