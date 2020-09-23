const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let basicTech = new Schema({
  setQuestion: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  choice: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },

  answers: [
    {
      option: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model("Basic_Technology", basicTech);
