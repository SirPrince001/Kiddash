const app = require('./app')
require("dotenv").config();

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log("Listening to HTTP Server at port 8080");
});

module.exports = app;
