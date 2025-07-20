import React from 'react';

type Props = { codigo: string };

const Actions: React.FC<Props> = ({ codigo }) => {
  const handleEdit = () => {
    alert('Função de edição ainda não implementada.');
    console.log(`Clique em editar (Produto ${codigo})`);
  };


  const handleDelete = () => {
    if (window.confirm(`Tem certeza que deseja excluir o produto ${codigo}?`)) {
      alert('Produto excluído com sucesso.');
      console.log(`Produto ${codigo} excluído`);
    }
  };

  return (
    <>
      <button className="btn btn-edit" onClick={handleEdit}>Editar</button>
      <button className="btn btn-delete" onClick={handleDelete}>Excluir</button>
    </>
  );
};

export default Actions;