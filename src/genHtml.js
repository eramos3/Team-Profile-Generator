const fs = require('fs');
// function that uses data written in htmlTemplate to make a file and store it in the dist folder
function writeToFile(data) {
    fs.writeFile('./dist/teamGen.html', data, (err) => {
        // if there's an error, throw the error
        if(err){
            throw err;
        }
        console.log("Html page was created")
    });
};

module.exports = writeToFile;