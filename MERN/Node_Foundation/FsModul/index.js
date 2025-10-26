// const fs = require("fs");
// const filePath = "example.txt";

// // Step 1: Create and write to the file
// fs.writeFile(filePath, "Hello, this is the initial content.", (err) => {
//   if (err) {
//     console.error("Something went wrong during file creation:", err);
//   } else {
//     console.log("File created successfully.");

//     // Step 2: Append content to the file
//     fs.appendFile(filePath, "\nYes, good boy.", (err) => {
//       if (err) {
//         console.error("Something went wrong during file update:", err);
//       } else {
//         console.log("File updated successfully.");

//         // Step 3: Read the file content
//         fs.readFile(filePath, "utf-8", (err, data) => {
//           if (err) {
//             console.error("Something went wrong during file reading:", err);
//           } else {
//             console.log("File content:\n", data);

//             // Step 4: Delete the file
//             fs.unlink(filePath, (err) => {
//               if (err) {
//                 console.error(
//                   "Something went wrong during file deletion:",
//                   err
//                 );
//               } else {
//                 console.log("File deleted successfully.");
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });
 const fs=require("fs")
const message="\n hello its working actually"
 fs.appendFile("writeFile.txt",message,(err,)=>{
  if(err){
    console.log("showing error ",err)
  }else{
    console.log("create new file or write:")
  }
 })