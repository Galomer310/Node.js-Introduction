const fs = require('fs');

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading file: ${err}`);
            } else {
                resolve(data);
            }
        });
    });
};

const writeFile = (filePath, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(`Error writing to file: ${err}`);
            } else {
                resolve(`Content written to ${filePath}`);
            }
        });
    });
};

module.exports = { readFile, writeFile };
