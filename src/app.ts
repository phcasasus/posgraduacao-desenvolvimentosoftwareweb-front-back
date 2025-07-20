// selecione os botões
const editBtn = document.getElementById('editBtn') as HTMLButtonElement;
const deleteBtn = document.getElementById('deleteBtn') as HTMLButtonElement;

// quando clicar em "Editar"
editBtn.addEventListener('click', () => {
    // aqui você poderia abrir um modal, redirecionar, etc.
    console.log('Clique em editar');
    alert('Função de edição ainda não implementada.');
});

// quando clicar em "Excluir"
deleteBtn.addEventListener('click', () => {
    const ok = confirm('Tem certeza que deseja excluir este produto?');
    if (ok) {
        console.log('Produto excluído');
        alert('Produto excluído com sucesso.');
        // aqui você chamaria sua API para deletar o registro
    }
});
