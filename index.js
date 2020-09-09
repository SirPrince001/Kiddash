const app = require('./app')
require("dotenv").config();

const port = process.env.PORT || 4000

app.listen(port,  () => {
  console.log(`Listening to HTTP Server at port ${port}`);
});

module.exports = app;