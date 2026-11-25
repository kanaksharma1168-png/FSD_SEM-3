 import fs from 'fs'
//  fs.symlink("notes.txt","link.txt",(err)=>{
//      if(err){
//         console.log(err);
//          return
//       }
//       console.log("Symbolic Link created");
//  }) 

 fs.stat("link.txt",(err,stats)=>{
 if(err){
     console.log(err);
     return
 }
 console.log(stats.isSymbolicLink());
})

fs.lstat("link.txt",(err,stats)=>{
    if(err){
        console.log(err);
    }
    console.log(stats.isSymbolicLink());
})

fs.rename("link.txt","log.txt",(err)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log("File renamed succesfully");

})
