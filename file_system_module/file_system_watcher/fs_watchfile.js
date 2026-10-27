import { time } from 'console';
import fs from 'fs';

fs.watch("info.txt",{interval:time}(curr,prev)=>{ //pooling method
    console.log("curr:",curr);
    console.log("prev:",prev);
})
