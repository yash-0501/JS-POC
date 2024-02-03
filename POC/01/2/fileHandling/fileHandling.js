const fs = require("fs");


// Synchronous call
// fs.writeFileSync('./test.txt', "Hey World!")

// Async Call
// fs.writeFile('./test.txt', "Hey World Async!", (err) =>{
//     console.log(err);
// })



// Reading Files
// const res = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(res);

// fs.readFile("./contacts.txt", "utf-8", (err, res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
// })



// Appending in a file
// let newDate = new Date(); 
// fs.appendFileSync("./test.txt", `\n${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()} Hey There!`);

// fs.copyFileSync("./contacts.txt","./copy.txt");

// delete
// fs.unlinkSync("./copy.txt");

// stats of a file
// console.log(fs.statSync("./copy.txt"));
// console.log(fs.statSync("./contacts.txt"));

// making directories

// fs.mkdirSync("mydocs");

// fs.mkdirSync("mydocs/a/b/c", {recursive:true});