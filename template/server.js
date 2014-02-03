var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Version: ' + JSON.stringify(process.versions, 0, 2)+ '\n');
  res.write('This is a new GDG[x] NodeJS Cartridge on '+process.env.OPENSHIFT_APP_DNS+'\n');
}).listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP);
