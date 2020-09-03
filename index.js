const app = require('./app')
require("dotenv").config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0'
app.listen(port, host, () => {
  console.log("Listening to HTTP Server at port 8080");
});

module.exports = app;
