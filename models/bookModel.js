const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: true,
      
    },
    isActive: {
      type: Boolean,
      default: true,
      
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Books", bookSchema);
