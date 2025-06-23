// código da pesquisa
document.addEventListener("DOMContentLoaded", function () {
    //recebe o que o usuário insere no campo de pesquisa e pega o que está no nome dos livros
const searchInput = document.getElementById("pesquisa");
const cards = document.querySelectorAll(".card-container .card");

// inicia a pesquisa 
if (searchInput && cards.length > 0) {
searchInput.addEventListener("input", function () {
    const filtro = searchInput.value.toLowerCase();

    cards.forEach(card => {
    const titulo = card.querySelector(".descricao").textContent.toLowerCase();

    //se tiver o item ele mostra apenas o item pesquisado, se não tiver não mostra nada
    if (titulo.includes(filtro)) {
        card.style.display = "";
    } else {
        card.style.display = "none";
    }
    });
});
}

// código do formulário
const form = document.getElementById("form-contato");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

if (form && mensagemSucesso) {
form.addEventListener("submit", function (e) {
    e.preventDefault();

    //recebe os dados que os usuarios colocam no formulario
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    //faz a verificação dos campos, não deixando mandar o formulário com os campos vazios
    if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return;
    }

    //coloca a mensagem de sucesso no fim do formulario e reseta ele
    mensagemSucesso.innerText = "Mensagem enviada com sucesso! Obrigada pelo contato 💌";
    form.reset();
});
}

// código do carrinho

//inicia o contador do carrinho com 0 e recebe o botao e o lugar que está aparecendo o contador
let contador = 0;
const botoesComprar = document.querySelectorAll(".botao-card");
const contadorCarrinho = document.getElementById("contador-carrinho");

// faz a contagem conforme os botões de compra são apertados, como se os itens estivessem sendo adicionados no carrinho
if (botoesComprar.length > 0 && contadorCarrinho) {
botoesComprar.forEach(botao => {
    botao.addEventListener("click", function () {
    contador++;
    contadorCarrinho.innerText = contador;
    });
});
}
});
