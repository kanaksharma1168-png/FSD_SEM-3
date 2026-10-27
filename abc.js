Promise.all([promise1,promise2])
.then((response)=>
    console.log("reponse"))
.catch((error)=>
  console.log("error"))