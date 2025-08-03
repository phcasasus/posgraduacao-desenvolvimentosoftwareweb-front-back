import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProdutos } from '../state/ProdutosContext';
import { Product } from '../types';

export default function NewProduct() {
  const [form, setForm] = useState<Product>({
    codigo: '',
    nome: '',
    preco: '',
    categoria: '',
    imagem: ''
  });

  const { adicionarProduto } = useProdutos();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Exemplo simples para gerar código automático se estiver vazio
    const codigoFinal = form.codigo.trim() || Date.now().toString();

    adicionarProduto({ ...form, codigo: codigoFinal });
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="codigo"
        placeholder="Código (opcional)"
        value={form.codigo}
        onChange={handleChange}
      />
      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
      />
      <input
        name="preco"
        placeholder="Preço"
        value={form.preco}
        onChange={handleChange}
        required
      />
      <input
        name="categoria"
        placeholder="Categoria"
        value={form.categoria}
        onChange={handleChange}
        required
      />
      <input
        name="imagem"
        placeholder="URL da Imagem"
        value={form.imagem}
        onChange={handleChange}
      />
      <button type="submit">Criar</button>
      <button type="button" onClick={() => navigate('/')}>Cancelar</button>
    </form>
  );
}
