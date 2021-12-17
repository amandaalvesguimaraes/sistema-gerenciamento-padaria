import express from 'express';
import funcionarioRouter from './src/routes/funcionario.routes';

const server = express();
const port = 8080;

server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

server.use(express.json());

server.use('/funcionarios', funcionarioRouter);

server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
});