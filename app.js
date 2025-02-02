//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let sorteados = new Map();
let disponiveis = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    input.value = "";
    atualizarLista();
    disponiveis = [...amigos]; // Atualiza a lista de disponíveis
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 participantes para o sorteio.");
        return;
    }
    
    if (disponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }
    
    let amigo = disponiveis.shift(); // Pega o próximo amigo disponível
    let possiveis = amigos.filter(pessoa => pessoa !== amigo && !Array.from(sorteados.values()).includes(pessoa));
    
    if (possiveis.length === 0) {
        alert("Sorteio falhou. Tente novamente para evitar autoatribuições.");
        return;
    }
    
    let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
    sorteados.set(amigo, sorteado);
    
    mostrarResultado(amigo, sorteado);
}

function mostrarResultado(amigo, sorteado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa o resultado anterior
    const li = document.createElement("li");
    li.textContent = ` ${sorteado}`;
    resultadoLista.appendChild(li);
}
