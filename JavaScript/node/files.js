// file system
const fs = require('fs');

// reading files (asynchronous)
fs.readFile('./modules.js', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('finish');

// writing files
fs.writeFile('./cool.txt', 'hi there', () => {
    console.log('file written');
})

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', err => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', err => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files
if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', err => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}
