import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (url === '/' ) {
        res.statusCode = 200
        res.end('<h1>Fãs da Mitski</h1>')

    } else if (url === '/sobre' && method === 'GET') {
        res.statusCode = 200
        res.end('<h1>Sobre a Mitski</h1><br><p>Mitski é uma cantora e compositora japonesa-americana conhecida por suas letras introspectivas e som indie rock.</p>');

    } else if (url === '/contato' ) {
        res.statusCode = 200
        res.end('<h1>Contato</h1><br><p>Você pode entrar em contato conosco pelo email: fanclubedamelhor@gmail.com</p>');

     } else if (url === '/fotos' ) {
        res.statusCode = 200
        res.end('Foto');

    } else {
        res.statusCode = 404
        res.end('<h1>404 - Página não encontrada</h1>')

    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});