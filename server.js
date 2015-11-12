var PORT = 3000;
var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');

function listening() {
  console.log("Server is listening on port " + PORT);
}

connect()
  .use(serveStatic(path.join(__dirname, 'public')))
  .listen(PORT, listening);
