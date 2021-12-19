import express from 'express';
import funcionarioRouter from './src/routes/funcionario.routes';
import produtoRouter from './src/routes/produto.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/funcionarios', funcionarioRouter);
app.use('/users', produtoRouter);


app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
});