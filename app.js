const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//create app
const app = express();

//connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log("Connected to DB");
    //start listening on port
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`server is listening on port ${port}...`)
    );
  })
  .catch((err) => console.log(err));

//handle submitted form's data
app.use(express.urlencoded({ extended: false }));

//handle json formatted data
app.use(express.json());

//set view template engine
app.set('view engine' , 'ejs');

//serve static files
app.use("/assets", express.static("assets"));

//redirect from localhost
app.get("/", (req, res) => res.redirect("/blogs"));

//use router
app.use("/blogs", require("./routes/blogs"));

//about page
app.get("/about", (req, res) => res.render("about", { title: "About" }));

//404 page
app.use((req, res) => res.status(404).render("404", { title: "Bad Request" }));
