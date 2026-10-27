import fs from 'fs';

fs.watch("info.txt",(eventType,filename)=>{ //os
    console.log("Event Type:",eventType);
    console.log("Filename :",filename);
})
//change event
//rename event