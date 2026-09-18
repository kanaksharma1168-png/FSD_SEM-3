//key value pairs 
const user={
    username : "john Doe",
    age : 25,
    course : "Btech"
} 

console.log(user.username);
console.log(user.age);
console.log(user.course);
console.log(user["username"])

user["username"]="kanak" //to update the object 
console.log(user["username"])
