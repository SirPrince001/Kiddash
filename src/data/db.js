const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  connect: () => {
    mongoose.connect(process.env.DATABASE_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("Connected to Database");
    });
    connection.on("error", () => {
      console.log("Error conncting to Database");
    });
  },
};
