const fs = require('fs');

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