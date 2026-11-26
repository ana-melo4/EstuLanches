const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'estu',
  password: process.env.DB_PASS || 'estu123',
  database: process.env.DB_NAME || 'estulanches',
  port: process.env.DB_PORT || 5432,
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/cardapio', async (req, res) => {
  const r = await pool.query('SELECT * FROM cardapio');
  res.json(r.rows);
});

app.post('/pedidos', async (req, res) => {
  const { item_id, quantidade } = req.body;
  if (!item_id || !quantidade || quantidade < 1)
    return res.status(400).json({ erro: 'dados invalidos' });
  const r = await pool.query(
    'INSERT INTO pedidos(item_id, quantidade) VALUES($1,$2) RETURNING *',
    [item_id, quantidade]);
  res.status(201).json(r.rows[0]);
});

module.exports = { app, pool };