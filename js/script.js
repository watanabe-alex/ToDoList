let board = document.getElementById("board");
let buttonAdd = document.getElementById("add");
let inputAdd = document.getElementById("novaTarefa");

let listaTarefas = [];
if(localStorage.getItem('listaTarefas')){
  listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
} else {
  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}
mostrarNaTela(listaTarefas);

// CRIA NOVA TAREFA
buttonAdd.onclick = function() {

  let valorDigitado = inputAdd.value;
  gerarTarefa(valorDigitado);

  // adicionar tarefa no localStorage
  listaTarefas.push(valorDigitado);
  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

function mostrarNaTela(tarefas){
  for (let item of tarefas) {
    gerarTarefa(item);
  }
}

function gerarTarefa(valor){
  // cria todos os elementos
  let tarefa = document.createElement('div');
  tarefa.setAttribute('class','tarefa');

  let titulo = document.createElement('div');
  titulo.setAttribute('class','col-md-8');
  titulo.textContent = valor;

  let buttonCheck = document.createElement('div');
  buttonCheck.setAttribute('class','col-md-2');

  let imgCheck = document.createElement('img');
  imgCheck.setAttribute('class','icon');
  imgCheck.setAttribute('src','img/check.png');

  // faz append dos elementos
  buttonCheck.appendChild(imgCheck);
  tarefa.appendChild(titulo);
  tarefa.appendChild(buttonCheck);
  board.appendChild(tarefa);
}