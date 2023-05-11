let add = document.querySelector("#adiciona");
let input = document.querySelector("#tarefa");
let main = document.querySelector("#lista");
let addTitulo = document.querySelector("#add");

let contador = 0;

function addTarefa() {
    let inputValue = input.value;

    ++contador;

    if (inputValue !== "" && inputValue !== null && inputValue !== undefined) {
        let newItem = `<div id="${contador}" class="item" onclick="tarefaFeita(${contador})" >
            <div id="item-icone">
                <span id="${contador}" class="material-icons">
                       task_alt
                </span>
            </div>

            <div id="item-nome">
                ${inputValue}
            </div>

            <div id="item-botao">
                <button onclick="removerTarefa(${contador})" id="delete"> <span class="material-icons">
                        delete
                    </span> Deletar</button>
            </div>
        </div>`;

        main.innerHTML += newItem;
        input.value = "";
        input.focus();
    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        addTarefa();
    }
});

function removerTarefa(valor) {
    let tarefaremover = document.getElementById(valor);
    tarefaremover.remove();
}

function tarefaFeita(valor) {
    let item = document.getElementById(valor);
    item.classList.toggle("clicado");
}
