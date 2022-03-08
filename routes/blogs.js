const express = require("express");
const blogController = require("../controllers/blogController"); 

//create router
const router = express.Router();

//get all blogs
router.get("/", blogController.blog_index);

//render create page
router.get("/create", blogController.blog_create);

//render edit page
router.get("/edit/:id", blogController.blog_edit);

//handle post request
router.post("/", blogController.blog_create_post);

//handle delete request
router.delete("/:id", blogController.blog_delete);

//handle put request
router.put("/:id", blogController.blog_edit_put);

//get one blog
router.get("/:id", blogController.blog_details);

module.exports = router;
