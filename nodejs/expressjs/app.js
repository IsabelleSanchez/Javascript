//import express
import express from 'express';

const app = express();
const PORT = 3000;

//middleware para definir o tipo de conteúdo como HTML
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    next();
});

// roteamento básico
app.get("/", (req, res) => {
    res.status(200).send("<h1>Fãs da Mitski</h1>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Sobre a Mitski</h1><br><p>Mitski é uma cantora e compositora japonesa-americana conhecida por suas letras introspectivas e som indie rock.</p>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Contato</h1><br><p>Entre em contato conosco</p>");
});


app.get("/fotos", (req, res) => {
    res.status(200).send("Foto");
});

//rota para lidar com páginas não encontradas

app.use((req, res) => {
    res.status(404).send("<h1>404 - Página não encontrada</h1>");
});

//iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});