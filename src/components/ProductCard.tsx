import React from 'react';
import Actions from './Actions';

type Produto = {
  codigo: string;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
};

const ProductCard: React.FC<{ produto: Produto }> = ({ produto }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={produto.imagem} alt={produto.nome} />
    </div>
    <div className="product-details">
      <h1 className="product-title">{produto.nome}</h1>
      <p className="product-category">{produto.categoria}</p>
      <p className="product-price">R${produto.preco.toFixed(2)}</p>
    </div>
    <div className="product-actions">
      <Actions codigo={produto.codigo} />
    </div>
  </div>
);

export default ProductCard;