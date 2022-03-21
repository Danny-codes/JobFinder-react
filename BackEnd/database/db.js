import Sequelize from "sequelize";

export const connection =  new Sequelize(
    'postgres',
    'postgres',
    '1234',
    {dialect: 'postgres', host: 'localhost'}
)

 const DB = async() => {
    return connection
    .authenticate()
    .then(console.log('Conectado com o DB'))
    .catch(error => {console.log(error)})
}

export default DB