const fs = require("fs");
var he1 = "What are you doing";
var he2 = "hello checking for another file updated now";

// For check no. of cpus or thread in the pc have
// const os = require('os');
// console.log(os.cpus().length);

// For writing file
// sync is used for synchronous call(Below is sync call)
// fs.writeFileSync('./file/note.txt',he1);

// (Below is Async call)
// fs.writeFile('./file/note1.txt', he2, (err) =>{});



// for reading file

// Below code is sync function
// const result = fs.readFileSync('./file/note.txt','utf-8',(err)=>{});
// console.log(result);

// Below code is async function
// fs.readFile('./file/note.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })



// For Appending or updating file
// fs.appendFileSync('./file/note.txt',' Updated file')


// We can do also more operations like deleting, view stats etc etc