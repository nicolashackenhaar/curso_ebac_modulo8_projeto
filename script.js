const form = document.getElementById('formulario');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
  e.preventDefault();

  const inputNome = document.getElementById('nome');
  const inputTelefone = document.getElementById('telefone');
  
  if (inputTelefone.value.length === 11) {
    adicionaLinha();
    atualizaTabela();
    inputNome.value = '';
    inputTelefone.value = '';
  } else {
    alert('O número de telefone deve ter 11 dígitos.');
  }
});

function adicionaLinha(){
  const inputNome = document.getElementById('nome');
  const inputTelefone = document.getElementById('telefone');

  if (nomes.includes(inputNome.value)){
    alert (`o contato do ${inputNome.value} já foi adicionado`);

  } else{
    nomes.push(inputNome.value);
    const numeroTelefone = inputTelefone.value.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3 - $4');
  
    let linha = '<tr>';
    linha += `<td>${inputNome.value} </td>`;
    linha += `<td>${numeroTelefone} </td>`;
    linha += '</tr>';
  
    linhas += linha;
  }

}

function atualizaTabela(){
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}
/*
Na tarefa deste módulo, você irá criar uma aplicação de agenda de contatos.

1) Construa uma tabela com duas colunas:
nome
telefone

2) Construa um formulário no qual o usuário irá inserir o nome e telefone do contato e, ao clicar em cadastrar, uma linha será adicionada na tabela de contatos.

3) Publique a aplicação na Vercel. Para isso será necessário criar um repositório no Github e alimentá-lo com o código do projeto;

4) Cole na plataforma o link do projeto publicado na Vercel.
 */