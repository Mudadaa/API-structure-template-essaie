// 1. Require pg
const { Pool } = require('pg');

// 2. Créer un client
const pool = new Pool(process.env.PG_URL);

// 3. Connecter le client
pool.connect();

// 4. Exporter le client connecté
module.exports = pool;

