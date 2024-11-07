"use strict";
const calculateShapeArea = (shape) => {
    if ((shape === null || shape === void 0 ? void 0 : shape.shape) === "circle") {
        return parseFloat((Math.PI * (shape === null || shape === void 0 ? void 0 : shape.radius) * (shape === null || shape === void 0 ? void 0 : shape.radius)).toFixed(2));
    }
    else if ((shape === null || shape === void 0 ? void 0 : shape.shape) === "rectangle") {
        return (shape === null || shape === void 0 ? void 0 : shape.height) * (shape === null || shape === void 0 ? void 0 : shape.width);
    }
    else {
        throw new Error("Not Valid input");
    }
};
console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
}));
