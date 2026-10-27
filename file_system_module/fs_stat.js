import fs, { Stats } from 'fs'
import { stat } from 'fs/promises';

fs.stat("log.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return 
    }
    console.log(stats);
})
console.log(Stats.size);
//console.log(Stats.mtime.toISOString());