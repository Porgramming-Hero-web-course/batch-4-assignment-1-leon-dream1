"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        return new Date().getFullYear() - this.year;
    }
}
const car = new Car("Honda", "Civic", 2024);
console.log(car.getCarAge());
