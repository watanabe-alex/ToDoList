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

  // adicionar tarefa no localStorage
  listaTarefas.push(valorDigitado);
  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));

  gerarTarefa(valorDigitado, listaTarefas.length-1);
}

function mostrarNaTela(tarefas){
  board.innerHTML = "";
  listaTarefas.forEach(function (val, pos) {
    gerarTarefa(val, pos);
  });
}

function gerarTarefa(valor, pos){
  // cria todos os elementos
  let tarefa = document.createElement('div');
  tarefa.setAttribute('class','tarefa');
  tarefa.setAttribute('pos', pos);

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

  // adiciona função para concluir tarefas
  imgCheck.addEventListener('click', function(e) {

    // remove do local storage
    // listaTarefas.splice(tarefa.getAttribute('pos'), 1);
    listaTarefas = listaTarefas.filter(function(valor,posicao){ //outra maneira de filtrar
      return posicao != tarefa.getAttribute('pos');
    });
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));

    // remove do html
    tarefa.remove(); //maneira 1 de fazer
    //e.target.parentNode.parentNode.remove(); //maneira 2 de fazer

    mostrarNaTela();
  });

}

