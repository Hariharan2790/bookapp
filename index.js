const express = require("express");
const cors = require("cors");
const dbConnect = require('./connection');
const bookRoutes = require("./routes/bookRoutes");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to book app!");
});

app.listen(port, () => console.log(`App listening on port ${port}`));
