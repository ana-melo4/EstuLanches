const request = require('supertest');
const { app, pool } = require('../app');

afterAll(() => pool.end());

test('GET /health responde ok', async () => {
  const r = await request(app).get('/health');
  expect(r.status).toBe(200);
});
test('GET /cardapio traz itens do banco', async () => {
  const r = await request(app).get('/cardapio');
  expect(r.body.length).toBeGreaterThan(0);
});
test('POST /pedidos cria pedido', async () => {
  const r = await request(app).post('/pedidos').send({ item_id: 1, quantidade: 2 });
  expect(r.status).toBe(201);
});
test('POST /pedidos invalido retorna 400', async () => {
  const r = await request(app).post('/pedidos').send({});
  expect(r.status).toBe(400);
});