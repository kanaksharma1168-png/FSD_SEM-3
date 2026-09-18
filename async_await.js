function getuser(){
return new Promise ((resolve,reject)=>{
let user =true 
if(user){
    reject(new Error("user not exits "));
}
else{
    resolve({
        username:"kanak",
        role:"Engineer"
    });
}
});
}
async function fetchuser(){
    const response=await getuser()
    console.log(response);
}
fetchuser()
console.log("hello");