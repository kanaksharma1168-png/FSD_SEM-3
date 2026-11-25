import fs from 'fs';

// // 1. Create the symbolic link first
// fs.symlink("notes.txt", "link.txt", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("Symbolic Link created");

//     // 2. Run stat and lstat AFTER the link is successfully created
//     fs.stat("link.txt", (err, stats) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("stat isSymbolicLink:", stats.isSymbolicLink()); // Prints: false
//     });

//     fs.lstat("link.txt", (err, stats) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("lstat isSymbolicLink:", stats.isSymbolicLink()); // Prints: true
//     });
// });

// fs.rename("notes.txt","new_notes.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File renamed")

// })

fs.unlink("new_notes.txt",(err)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log("File deleted");
})