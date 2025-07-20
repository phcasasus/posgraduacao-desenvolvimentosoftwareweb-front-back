import React, { useState, useEffect } from 'react';

type Produto = {
  codigo: string;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
};

const App: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtroCodigo, setFiltroCodigo] = useState<string>('');
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setProdutos(data);
        setProdutosFiltrados(data);
      });
  }, []);

  const filtrar = () => {
    if (filtroCodigo.trim() === '') {
      setProdutosFiltrados(produtos);
    } else {
      const filtrados = produtos.filter(p => p.codigo === filtroCodigo.trim());
      setProdutosFiltrados(filtrados);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 12 }}>
      <h1>Lista de Produtos</h1>
      
      {/* Campo de filtro */}
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="codigo">Código: </label>
        <input
          id="codigo"
          type="text"
          value={filtroCodigo}
          onChange={e => setFiltroCodigo(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <button onClick={filtrar}>Filtrar</button>
      </div>

    
      {/* Lista de produtos */}
      {produtosFiltrados.length === 0 && <p>Nenhum produto encontrado.</p>}
      {produtosFiltrados.map(produto => (
        <div
          key={produto.codigo}
          className="product-card"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: 32,
            padding: 12,
            marginBottom: 20,
            fontFamily: 'Arial, sans-serif',
            height: 288,
          }}
        >
          <div
            style={{
              flex: 'none',
              width: 240,
              height: 240,
              borderRadius: '50%',
              overflow: 'hidden',
              marginLeft: 12,
            }}
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: 20, marginTop: 20 }}>
            <p><strong>Código:</strong> {produto.codigo}</p> {/* Código dentro do cartão */}
            <h1 style={{ fontSize: 24, lineHeight: 1.2, margin: 0 }}>
              {produto.nome}
            </h1>
            <p
              style={{
                fontSize: 16,
                color: '#666',
                margin: '3px 0',
                display: 'inline-block',
                borderBottom: '1px dashed #ccc',
              }}
            >
              {produto.categoria}
            </p>
            <p style={{ fontSize: 18, fontWeight: 'bold', margin: '3px 0' }}>
              R${produto.preco.toFixed(2)}
            </p>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 12,
              display: 'flex',
              gap: 16,
            }}
          >
            <button
              className="btn btn-edit"
              onClick={() => alert('Função de edição ainda não implementada.')}
            >
              Editar
            </button>
            <button
              className="btn btn-delete"
              onClick={() => {
                if (window.confirm(`Tem certeza que deseja excluir o produto ${produto.codigo}?`)) {
                  alert('Produto excluído com sucesso.');
                }
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
