/*
    - start using data before it has finished loading
    - work like streams in real life (water + video streaming)
    ex. instead of waiting to grab all the water at once, we have a stream that constantly delivers a little bit of water
    - We pass data a bit at a time through a string, and it is stored in a buffer
        - When the buffer is filled, it is sent down the stream 
*/

const fs = require('fs');

const readStream = fs.createReadStream('./cool.txt', { encoding: 'utf8' });

readStream.on('data', chunk => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk);
    // writeStream.write('\nNEW CHUNK:\n');
    // writeStream.write(chunk);
});


// piping
// Whatever we get from read stream, pipe it to the write stream
// readStream.pipe(writeStream);