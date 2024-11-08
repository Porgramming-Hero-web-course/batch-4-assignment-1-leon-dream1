<!-- [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16997992&assignment_repo_type=AssignmentRepo) -->



# Type Guards in Typescript

In Typescript , type guards is essential to validate the type in the runtime. Its ensure that code handle dynamic data in a safe way. If we not sure which type of will come from external resource we can use type guard to validate them before operation.

There are mainly 4 type of guards:
- typeof
- instanceof
- in
- value is Type

# 1. typeof : 
It check primitive type like string, number , boolean and based on type we perform operation.

```
  function doubleVal (num : number | string): number{
   if(typeof num === "number"){
    return num * 2
   }
   else if(typeof num === "string"){
    return parseInt(num) * 2;
   }
  }
```


# 1. instanceof :
This is used for check if a object is belong or instance of a class or not 

```
class Dog {
  bark() {
    console.log("Woof!");
  }
}

function handlePet(pet: Dog | string) {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    console.log("Pet's name:", pet);
  }
}
```

