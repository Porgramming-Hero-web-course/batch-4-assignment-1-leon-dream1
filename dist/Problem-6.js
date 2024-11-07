"use strict";
const updateProfile = (profile, updatedObj) => {
    return Object.assign(Object.assign({}, profile), updatedObj);
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { name: "update" }));
