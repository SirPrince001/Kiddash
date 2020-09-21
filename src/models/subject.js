const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let subjectSchema = new Schema({
  subject_title: {
    type: String,
    required: true,
  },
  image: String,
});

module.exports = mongoose.model("SUBJECT", subjectSchema);
