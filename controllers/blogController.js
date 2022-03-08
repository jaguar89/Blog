const Blog = require("../models/blog");

//get all blogs and render index page
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((docs) => {
      res.render("blogs/index", { title: "Home", blogs: docs });
    })
    .catch((err) => console.log(err));
};

//render create page
const blog_create = (req, res) => {
  res.render("blogs/create", { title: "Create Blog" });
};

//create new blog and redirect to index
const blog_create_post = (req, res) => {
  Blog.create(req.body)
    .then((doc) => res.redirect("/"))
    .catch((err) => console.log(err));
};

//get single blog and render details page
const blog_details = (req, res, next) => {
  Blog.findById(req.params.id)
    .then((doc) => {
      res.render("blogs/details", { title: "Details", blog: doc });
    })
    .catch((err) => next());
};

//delete blog and respond with json
const blog_delete = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((doc) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

//render edit page
const blog_edit = (req, res, next) => {
  Blog.findById(req.params.id)
    .then((doc) => {
      res.render("blogs/edit", { title: "Modify Blog", blog: doc });
    })
    .catch((err) => next());
};

//update blog and respond with json
const blog_edit_put = (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then((doc) => {
      res.json({ redirect: "/blogs/"+doc._id });
    })
    .catch((err) => console.log(err));
};

//export our functions
module.exports = {
  blog_index,
  blog_create,
  blog_create_post,
  blog_details,
  blog_delete,
  blog_edit,
  blog_edit_put,
};
