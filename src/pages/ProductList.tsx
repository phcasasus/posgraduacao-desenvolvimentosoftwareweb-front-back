import { Link } from 'react-router-dom';
import { useProdutos } from '../state/ProdutosContext';

export default function ProductList() {
  const { produtos } = useProdutos();

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/novo">Novo Produto</Link>
      </div>
      <ul className="product-list">
        {produtos.map((produto) => (
          <li key={produto.codigo} className="product-card">
            <img src={produto.imagem} alt={produto.nome} className="product-image" />
            <div className="product-info">
              <strong>{produto.nome}</strong>
              <p>Categoria: {produto.categoria}</p>
              <p>Preço: R$ {produto.preco}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
