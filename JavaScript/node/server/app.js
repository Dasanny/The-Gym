const express = require('express');

// express app
const app = express();

// listen for requests on port 3000
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// express looks for views inside the ejs-views folder
app.set('views', 'ejs-views');

// the below app.get functions are similar to a large switch statement

// home page
app.get('/', (req, res) => {
    // pass in dynamic data as object
    const blogs = [
        { title: 'big big yoshi', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'korosensei peeps', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'he also explodes', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'title', blogs });
})

// about page
app.get('/about', (req, res) => {
    res.render('about', { title: 'about' });
})

// create blog page
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create new blog' });
})

// default case (always runs if there is no match above)

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})