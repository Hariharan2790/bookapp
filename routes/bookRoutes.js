const express = require("express");
const booksModel = require("../models/bookModel");
const router = express.Router();

router.get("/getallbooks", async (req, res) => {
  try {
    const books = await booksModel.find();
    res.send(books);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/addbook", async (req, res) => {
  try {
    const newBook = new booksModel(req.body);
    await newBook.save();
    res.status(201).send("Book added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/editbook/:id", async (req, res) => {
  
  try {
    const { id } = req.params;
    await booksModel.findByIdAndUpdate(id, req.body);
    res.status(201).send("Book updated successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/deletebook/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await booksModel.findByIdAndDelete(id);
        res.status(201).send("Book deleted successfully");
    } catch (error) {
        res.status(400).json(error);        
    }
})
module.exports = router;
