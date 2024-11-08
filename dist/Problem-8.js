"use strict";
{
    const validateKeys = (obj, keys) => {
        let valid = true;
        keys.forEach((key) => {
            console.log(obj[key]);
            if (obj[key] === undefined) {
                valid = false;
            }
        });
        return valid;
    };
    const person = { name: "", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age", "email"]));
}
