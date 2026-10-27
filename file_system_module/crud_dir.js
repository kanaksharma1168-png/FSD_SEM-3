import fs from 'fs';

fs.mkdir("./myfolder", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Folder Created");
});

fs.readdir(".", (err, files) => {
    if (err) {
        console.log(err);
        return; // Stops execution if an error occurs
    }
    console.log("Directory read successfully:", files);
});