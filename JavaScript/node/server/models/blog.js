const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    // describe blog structure
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true });

// look for the Blog collection in the database
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;