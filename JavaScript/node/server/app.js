const express = require('express');

// express app
const app = express();

// listen for requests on port 3000
app.listen(3000);

// the below app.get functions are similar to a large switch statement

// home page
app.get('/', (req, res) => {
    // automatically sends header + status code
    // res.send('<p>html response</p>');
    // specify that the ./ root directory is the current directory (__dirname)
    res.sendFile('./views/index.html', { root: __dirname });
})

// about page
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// default case (always runs if there is no match above)

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})