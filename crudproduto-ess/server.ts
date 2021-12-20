import express from 'express';
import { Server } from 'http';
import produtoRouter from './src/routes/produto.routes';
import funcionarioRouter from './src/routes/funcionario.routes'
import vendaRouter from './src/routes/venda.routes'


const server = express();

server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    next();

});

const port = 3000;

server.use(express.json());
server.use("/users", produtoRouter); //produtos
server.use('/funcionarios', funcionarioRouter);
server.use('/vendas', vendaRouter);//vendas



server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
});