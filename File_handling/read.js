// Read and Delete Existing File
const fs = require("fs");
fs.readFile(__dirname + "/File.txt", (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data.toString());

    // fs.unlink(__dirname + "/File.txt", (error, data) => {
    //    if (error) {
    //        throw error;
    //    }
    //    console.log("File is  Deleted Successfully");
    //   })
})