import fs from "fs/promises"

async function greet(){
    return "hello"
}

//greet()
//.then((res)=>{
//
//  console.log(res);
//})
//.catch((error)=>{
//   console.log(error);
//})

async function fileHandling("log.txt"){
    await fs.writeFile("log.txt",content)
    console.log("File Created");
    const data= await fs.readFile("log.txt",{encoding:utf8})
    console.log("Data: ",data);
}
fileHandling("log.txt","Username:")

fs.appendFile("log.txt"," New user")
.then((res)=>{
    console.log("File Appended ");
    
})
.catch((err)=>{
    console.log(err);
})


