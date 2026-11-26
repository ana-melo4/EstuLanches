function totalPedido(preco, qtd) { return preco * qtd; }

test('calcula total do pedido', () => {
  expect(totalPedido(6, 3)).toBe(18);
});
test('quantidade invalida', () => {
  expect(totalPedido(6, 0)).toBe(0);
});