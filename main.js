const form = document.getElementById('form-tarefas');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputLista = document.getElementById('lista');
    const inputData = document.getElementById('data');

    let linha = '<tr>';
    linha += `<td>${inputLista.value}</td>`;
    linha += `<td>${inputData.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputLista.value = '';
    inputData.value = '';

});

