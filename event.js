import EventEmitter from "node:events";

const emitter =new EventEmitter()

//Event registration 

emitter.on("orderPlaced",(orderName, orderPrice)=>{
    console.log(`Order ${orderName} and Price:${orderPrice} Placed Successfully`)//These(``) are called template literals 
})

emitter.on("orderPlaced",()=>{
    console.log("Notification send to the user")
})
emitter.on("orderPlaced",()=>{
    console.log("Email send")
})
emitter.on("orderPlaced",()=>{
    console.log("Inventory updated")
})

emitter.emit("orderPlaced","Iphone 18 pro max",158000)
