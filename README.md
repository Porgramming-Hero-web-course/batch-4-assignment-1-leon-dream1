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


# 2. instanceof :
This is used for check if a object is belong or instance of a class or not .

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

# 3. in :
This is used for check if a property exists on an object or not.

```
type user = { name: string };
type userAccount = { ID: number };

function processProperties(obj: user | userAccount) {
  if ("name" in obj) {
    console.log("User name:", obj.name);
  } else {
    console.log("Account ID:", obj.ID);
  }
}
```

# 4. Custom type: 
Here function is responsible for check the type or act as a guards. we pass the entity to function for type guard , function tell us it is valid or not.

```
interface Teacher {
  teach: () => void;
}

interface Doctor {
  treat: () => void;
}

function isTeacher(user: any): user is Teacher {
  return user && typeof user.teach === "function";
}

function handleUser(user: Teacher | Doctor) {
  if (isTeacher(user)) {
    user.teach();
  } else {
    user.treat();
  }
}

```

Use case of type guard : 
- Dynamic API: When we fetch data from external source we don't sure what type of data will come. we can use type guard to valid data type before any operation
- Error Prevent: We can decrease run time error using this type guard.
- Readability: Type guard make code easy to read for visitor and programmer.


Type guards is the backbone of safe type manipulation in Typescript. We should use it in our daily project to write error free , clean and readable code. 