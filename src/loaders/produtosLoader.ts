import { Produto } from '../types/Produto';
import { produtosIniciais } from '../data/produtosIniciais';

export async function produtosLoader(): Promise<Produto[]> {
  const localData = localStorage.getItem('produtos');
  
  if (localData) {
    try {
      return JSON.parse(localData);
    } catch (e) {
      console.error("Erro ao ler produtos do localStorage:", e);
    }
  }

  return produtosIniciais;
}