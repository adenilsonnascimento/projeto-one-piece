// Selecionando todos os elementos com a classe "botao" e "personagem"
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Iterando sobre todos os botões selecionados
botoes.forEach((botao, indice) => {
    // Adicionando um evento de clique a cada botão
    botao.addEventListener("click", () => {

        // Removendo a seleção de qualquer botão previamente selecionado
        desselecionarBotao();

        // Adicionando a classe "selecionado" ao botão clicado
        botao.classList.add("selecionado");

        // Removendo a seleção de qualquer personagem previamente selecionado
        desselecionarPersonagens();

        // Adicionando a classe "selecionado" ao personagem correspondente ao botão clicado
        personagens[indice].classList.add("selecionado");
    });
});

// Função para remover a seleção de todos os personagens
function desselecionarPersonagens() {
    // Selecionando o personagem que está atualmente selecionado
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    // Removendo a classe "selecionado" do personagem selecionado
    personagemSelecionado.classList.remove("selecionado");
}

// Função para remover a seleção de todos os botões
function desselecionarBotao() {
    // Selecionando o botão que está atualmente selecionado
    const botaoSelecionado = document.querySelector(".botao.selecionado");

    // Removendo a classe "selecionado" do botão selecionado
    botaoSelecionado.classList.remove("selecionado");
}
