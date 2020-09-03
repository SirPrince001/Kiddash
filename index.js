const app = require('./app')
require("dotenv").config();

const port = process.env.PORT

app.listen(port,  () => {
  console.log("Listening to HTTP Server at port 8080");
});

module.exports = app;
