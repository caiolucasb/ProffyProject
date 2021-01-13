import knex from 'knex';
import path from 'path';

//migration -- controlam a versão dentro do banco de dados(como o git faz com o codigo)

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    }, 
    useNullAsDefault: true,
})

export default db;