  import fs from 'fs'
  fs.symlink("notes.txt","lol.txt",(err)=>{
      if(err){
         console.log(err);
          return
       }
     console.log("Symbolic Link created");
 }) 