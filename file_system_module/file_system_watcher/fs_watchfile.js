import { time } from 'console';
import fs from 'fs';

fs.watch("info.txt",(curr,prev)=>{ //pooling method
    console.log("curr:",curr);
    console.log("prev:",prev);
})

//fs.createreadstream
//fs.createwritestream
//events related to above two
//->data
//->end
//->error
