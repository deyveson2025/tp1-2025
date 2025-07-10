// Vetores (filas)
const filaGripe = [];
const filaCovid = [];

// Elementos da interface
const mensagemDiv = document.getElementById('mensagem');
const filaGripeDiv = document.getElementById('fila-gripe');
const filaCovidDiv = document.getElementById('fila-covid');

// Função para exibir mensagens
function mostrarMensagem(texto, tipo = 'info') {
    mensagemDiv.textContent = texto;
    mensagemDiv.className = '';
    mensagemDiv.classList.add(tipo);
    
    // Limpar mensagem após 3 segundos
    setTimeout(() => {
        mensagemDiv.textContent = '';
        mensagemDiv.className = '';
    }, 3000);
}

// Função para atualizar a exibição das filas
function atualizarFilas() {
    filaGripeDiv.innerHTML = filaGripe.length > 0 
        ? `<h3>${filaGripe.length} pessoa(s) na fila:</h3><ul>${filaGripe.map(pessoa => `<li>${pessoa}</li>`).join('')}</ul>`
        : '<p>Fila vazia</p>';
    
    filaCovidDiv.innerHTML = filaCovid.length > 0 
        ? `<h3>${filaCovid.length} pessoa(s) na fila:</h3><ul>${filaCovid.map(pessoa => `<li>${pessoa}</li>`).join('')}</ul>`
        : '<p>Fila vazia</p>';
}

// Funções do menu
function cadastrarGripe() {
    const nome = prompt('Digite o nome da pessoa para a fila da gripe:');
    if (nome && nome.trim()) {
        filaGripe.push(nome.trim());
        atualizarFilas();
        mostrarMensagem(`${nome} foi adicionado(a) à fila da gripe!`, 'success');
    } else {
        mostrarMensagem('Nome inválido!', 'error');
    }
}

function cadastrarCovid() {
    const nome = prompt('Digite o nome da pessoa para a fila da COVID:');
    if (nome && nome.trim()) {
        filaCovid.push(nome.trim());
        atualizarFilas();
        mostrarMensagem(`${nome} foi adicionado(a) à fila da COVID!`, 'success');
    } else {
        mostrarMensagem('Nome inválido!', 'error');
    }
}

function chamarGripe() {
    if (filaGripe.length > 0) {
        const pessoa = filaGripe.shift();
        atualizarFilas();
        mostrarMensagem(`${pessoa} foi chamado(a) para vacinação contra gripe!`, 'success');
    } else {
        mostrarMensagem('Não há pessoas na fila da gripe!', 'error');
    }
}

function chamarCovid() {
    if (filaCovid.length > 0) {
        const pessoa = filaCovid.shift();
        atualizarFilas();
        mostrarMensagem(`${pessoa} foi chamado(a) para vacinação contra COVID!`, 'success');
    } else {
        mostrarMensagem('Não há pessoas na fila da COVID!', 'error');
    }
}

function mostrarGripe() {
    const pessoas = filaGripe.length > 0 
        ? filaGripe.join(', ') 
        : 'Fila vazia';
    mostrarMensagem(`Fila da Gripe: ${pessoas}`);
}

function mostrarCovid() {
    const pessoas = filaCovid.length > 0 
        ? filaCovid.join(', ') 
        : 'Fila vazia';
    mostrarMensagem(`Fila da COVID: ${pessoas}`);
}

function sair() {
    if (confirm('Deseja realmente sair do programa?')) {
        filaGripe.length = 0;
        filaCovid.length = 0;
        atualizarFilas();
        mostrarMensagem('Programa encerrado. Obrigado!', 'success');
    }
}

// Inicializar exibição das filas
atualizarFilas();