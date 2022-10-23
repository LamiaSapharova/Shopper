const http = require('http');
const app = require('./app.js')

httpServer = http.createServer(app);
httpServer.listen(8080,() => {console.log('http server is running on port 8080')})