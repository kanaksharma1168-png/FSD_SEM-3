import EventEmitter from "events";
const emitter=new EventEmitter()

emitter.on("signup",()=>{
    console.log("User Signup Successfully");
})

emitter.on("welcome",()=>{
    console.log("WELCOME TO THE PAFE");
})

emitter.on("email",()=>{
    console.log("Email has been sent");
})
emitter.emit("signup")
emitter.emit("welcome")
emitter.emit("email")


