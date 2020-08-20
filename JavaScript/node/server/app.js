const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = ''

// connect to db (async)
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => { app.listen(3000); console.log('connected to db'); }) // only listen to requests once connected to db
    .catch(err => console.log(err));


// middleware + static files

// register view engine
app.set('view engine', 'ejs');

// static files are stored in the 'public' folder
app.use(express.static('public'));

// access req.body
app.use(express.urlencoded({ extended: true }))

// log request details to console with morgan
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// express looks for views inside the ejs-views folder
app.set('views', 'ejs-views');

// the below app.get functions are similar to a large switch statement

// mongoose & mongo tests
/*
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })

    // save to db
    blog.save()
        .then(result => {
            // view response
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    // return all documents
    Blog.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});
*/

// home page
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

// about page
app.get('/about', (req, res) => {
    res.render('about', { title: 'about' });
})

// create blog page
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create new blog' });
})

app.get('/blogs', (req, res) => {
    // return all documents, sorted by newest to oldest
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
        })
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            // send json back
            res.json({ redirect: '/blogs' })
        })
        .catch(err => {
            console.log(err);
        })

})


// default case (always runs if there is no match above)

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})