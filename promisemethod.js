const promise1 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        const user = {
            id: 1,
            name: "Kanak sharma",
            age: 19
        };
        resolve(user);
    } else {
        reject("Operation is failed");
    }
});

const promise2 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        const user = {
            id: 1,
            name: "Kanak sharma",
            age: 19
        };
        resolve(user);
    } else {
        reject("Operation is failed");
    }
});

//Promise.all([promise1,promise2])
//.then((response)=>{
//  console.log("Reponse")
//})
//.catch((error)=>{
 // console.log("Error")
//})

//Promise.race([promise2,promise1])
//.then((response)=>{
 //   console.log(response)
//})
//.catch((error)=>{
//  console.log(error)
//})

//Promise.allsettled([promise1,promise2])
//.then((response)=>{
//    console.log(response)
//})
//.catch((error)=>{
//  console.log(error)
//})

Promise.any([promise1,promise2])
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
  console.log(error)
})