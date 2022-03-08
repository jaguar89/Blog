const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create blog schema
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},{timestamps:true});


//create blog model 
const Blog = mongoose.model('Blog' , BlogSchema);

module.exports = Blog;