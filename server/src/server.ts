import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
//vai fazer a conversao do request body para um objeto em javascript
app.use(express.json());
app.use(routes)
//localhost:3333/users(isso é uma rota, chamamos a parte final da rota de recurso, nesse caso é o 'users')

/*METODOS HTTP */
//GET:buscar ou listar informaçao
//POST:criar alguma nova informaçao
//PUT:Aatualizar alguma informaçao  existente
//DELETE:deletar uma informaçao existente

//corpo(Request body): dados para atualizar ou criar un registro
// router params:indentifica qual recurso eu quero atualizar ou deletar
// query params: paginçao , filtro, ordençao



//localhost:3333
app.listen(3333);