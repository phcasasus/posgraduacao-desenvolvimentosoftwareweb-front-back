import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';

interface ProdutosContextType {
  produtos: Product[];
  adicionarProduto: (produto: Product) => void;
}

const ProdutosContext = createContext<ProdutosContextType | undefined>(undefined);

export function ProdutosProvider({
  children,
  produtosIniciais,
}: {
  children: ReactNode;
  produtosIniciais: Product[];
}) {
    const [produtos, setProdutos] = useState<Product[]>(() => {
    const localData = localStorage.getItem('produtos');
    return localData ? JSON.parse(localData) : produtosIniciais;
  });

   useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }, [produtos]);

  function adicionarProduto(produto: Product) {
    setProdutos((prev) => [...prev, produto]);
  }

  return (
    <ProdutosContext.Provider value={{ produtos, adicionarProduto }}>
      {children}
    </ProdutosContext.Provider>
  );
}

export function useProdutos() {
  const context = useContext(ProdutosContext);
  if (!context) {
    throw new Error('useProdutos deve ser usado dentro de um ProdutosProvider');
  }
  return context;
}