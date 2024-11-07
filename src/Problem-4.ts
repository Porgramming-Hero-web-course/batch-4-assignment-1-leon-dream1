


type Circle = {
    shape: "circle";
    radius: number
}

type Rectangle = { 
    shape: "rectangle";
    width: number;
    height: number
}

const calculateShapeArea = ( shape: Circle | Rectangle) : number => {
    if(shape?.shape === "circle"){
        return parseFloat((Math.PI * shape?.radius * shape?.radius).toFixed(2));
    }
    else if(shape?.shape === "rectangle"){
        return shape?.height * shape?.width
    }
    else{
        throw new Error("Not Valid input")
    }
}

console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  }));