import http from 'http'

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('OLA, MUNDO!');
}).listen(8080);

console.log('Servidor rodando em http://localhost:8080/');