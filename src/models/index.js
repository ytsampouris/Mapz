import Sequelize from 'sequelize';

let sequelize;
sequelize = new Sequelize({
  dialect: 'postgres',
  database: process.env.DB_NAME,
  host: process.env.PGHOST,
  port: '5432',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
});

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
  Layer: sequelize.import('./layer'),
  Species: sequelize.import('./species')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
