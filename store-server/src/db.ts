import knex from 'knex'
import appConfig from './config';

const knexStringcase = require('knex-stringcase');
const db = knex(knexStringcase({
    client: 'mysql2',
    connection: appConfig.dbConnectionInfo,
    uesNullAsDefault: true,
}));

export default db;
