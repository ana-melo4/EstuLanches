CREATE TABLE IF NOT EXISTS cardapio (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  preco NUMERIC(6,2) NOT NULL
);
CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  item_id INT REFERENCES cardapio(id),
  quantidade INT NOT NULL,
  criado_em TIMESTAMP DEFAULT NOW()
);
INSERT INTO cardapio(nome, preco) VALUES
 ('Coxinha', 6.00), ('Suco', 4.50), ('Pão de queijo', 5.00);