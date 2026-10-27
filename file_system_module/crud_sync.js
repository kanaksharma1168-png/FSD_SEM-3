//CRUD : TYPES 
//1.sync   2.async ---> 1. callback based mathod --->2.promises based method 
import fs from 'fs'

//create the file using fs module 
fs.writeFileSync("notes.txt","Hello")

//Read the File
const data=fs.readFileSync("notes.txt","utf8") //utf8 is a converter which convert buffer data to human readable data
console.log("Data:",data);

//update the file
fs.appendFileSync("notes.txt", "Hello World")

//delete the file
fs.rmSync("notes.txt")