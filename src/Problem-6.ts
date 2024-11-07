


interface Profile{
    name: string;
    age: number;
    email: string
}

const updateProfile = (profile: Profile, updatedObj: Partial<Profile>): Profile => {
    return {...profile, ...updatedObj}
}


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { name: "update" }));
