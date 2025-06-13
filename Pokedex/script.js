const modal = document.getElementById("modal")
var numeroPokemon = 1
var url = "https://pokeapi.co/api/v2/pokemon/" + numeroPokemon
fetch(url)
    .then(response => response.json())

    .then(dados => {
        var foto = document.getElementById("foto")
        var nome = document.getElementById("nome")
        var id = document.getElementById("ident")
        var altura = document.getElementById("altura")
        var peso = document.getElementById("peso")
        var tipo = document.getElementById("tipo")
        var habilidades = document.getElementById("hab")
        var estatisticas = document.getElementById("estatisticas")
        foto.src = dados.sprites.front_default
        nome.value = dados.name
        id.value = dados.id
        altura.value = dados.height
        peso.value = dados.weight
        tipo.value = dados.types.map(t => t.type.name)
        habilidades.value = dados.abilities.map(a => a.ability.name)
        estatisticas.innerText = dados.stats.map(stat => ({nome: stat.stat.name, valor: stat.base_stat}))
    })

    .catch(error => {
        console.error('Erro:', error)
    });

// Ativa o botão de buscar por nome
function buscarNome(){
    abrir()
    nome()
}

// Ativa o botão de buscar por Id
function buscarId()
{
    abrir()
    identificador()
}

// Ativa o botão de iniciar com o primeiro Pokemon
function iniciarpesq()
{
    abrir()
    iniciar()
}

// Abre o pop up (modal)
function abrir()
{
    modal.style.display = "flex"
}

//fecha o pop up se apertar fora dele
window.addEventListener("click", (e) => 
    {
        if(e.target === modal)
        {
            modal.style.display = "none"
        }
    })


function pesquisa(tipo)
{
    var tipo = 
}

//Função que faz a busca por nome funcionar pela API
function nome()
{
    var input = document.getElementById("nomepoke")

    var url = "https://pokeapi.co/api/v2/pokemon/" + input.value
    console.log(url)
    fetch(url)
        .then(response => response.json())

        .then(dados => {
            numeroPokemon = dados.id
            var foto = document.getElementById("foto")
            var nome = document.getElementById("nome")
            var id = document.getElementById("ident")
            var altura = document.getElementById("altura")
            var peso = document.getElementById("peso")
            var tipo = document.getElementById("tipo")
            var habilidades = document.getElementById("hab")
            var estatisticas = document.getElementById("estatisticas")
            foto.src = dados.sprites.front_default
            nome.value = dados.name
            id.value = dados.id
            altura.value = dados.height
            peso.value = dados.weight
            tipo.value = dados.types.map(t => t.type.name)
            habilidades.innerHTML = dados.abilities.map(a => a.ability.name)
            estatisticas.innerHTML = dados.stats.map(stat => {
               console.log( stat)
            } ).join('\n')
        })

        .catch(error => {
            console.error('1111111111111111Erro:', error)
        });

}

//Função que faz a busca por Id funcionar pela API
function identificador()
{
    var input = document.getElementById("identificador")

    var url = "https://pokeapi.co/api/v2/pokemon/" + input.value
    fetch(url)
        .then(response => response.json())

        .then(dados => {
            numeroPokemon = input.value
            var foto = document.getElementById("foto")
            var nome = document.getElementById("nome")
            var id = document.getElementById("ident")
            var altura = document.getElementById("altura")
            var peso = document.getElementById("peso")
            var tipo = document.getElementById("tipo")
            var habilidades = document.getElementById("hab")
            var estatisticas = document.getElementById("estatisticas")
            foto.src = dados.sprites.front_default
            nome.value = dados.name
            id.value = dados.id
            altura.value = dados.height
            peso.value = dados.weight
            tipo.value = dados.types.map(t => t.type.name)
            habilidades.value = dados.abilities.map(a => a.ability.name)
            estatisticas.innerHTML=""
            for(var i = 0; i < dados.stats.length; i++)
                {
                    estatisticas.innerHTML +=   dados.stats[i].stat.name+ "  "+    dados.stats[i].base_stat+"<br>"     
                }
           
        })

        .catch(error => {
            console.error('Erro:', error)
        });
}

// Faz a seta de próximo Pokemon funcionar
function proximoPokemon(){
    console.log(numeroPokemon)
    var idpoke = numeroPokemon+1;
    numeroPokemon++;
    console.log(idpoke)
    var url = "https://pokeapi.co/api/v2/pokemon/" + idpoke
    fetch(url)
        .then(response => response.json())

        .then(dados => {
            var foto = document.getElementById("foto")
            var nome = document.getElementById("nome")
            var id = document.getElementById("ident")
            var altura = document.getElementById("altura")
            var peso = document.getElementById("peso")
            var tipo = document.getElementById("tipo")
            var habilidades = document.getElementById("hab")
            var estatisticas = document.getElementById("estatisticas")
            foto.src = dados.sprites.front_default
            nome.value = dados.name
            id.value = dados.id
            altura.value = dados.height
            peso.value = dados.weight
            tipo.value = dados.types.map(t => t.type.name)
            habilidades.value = dados.abilities.map(a => a.ability.name)
            estatisticas.innerText = dados.stats.map(stat => ({nome: stat.stat.name, valor: stat.base_stat}))
        })

        .catch(error => {
            console.error('Erro:', error)
        });
}

// Faz a seta de Pokemon anterior funcionar
function anteriorPokemon(){
    var idpoke = numeroPokemon -1;
    numeroPokemon--
    var url = "https://pokeapi.co/api/v2/pokemon/" + idpoke
    fetch(url)
        .then(response => response.json())

        .then(dados => {
            var foto = document.getElementById("foto")
            var nome = document.getElementById("nome")
            var id = document.getElementById("ident")
            var altura = document.getElementById("altura")
            var peso = document.getElementById("peso")
            var tipo = document.getElementById("tipo")
            var habilidades = document.getElementById("hab")
            var estatisticas = document.getElementById("estatisticas")
            foto.src = dados.sprites.front_default
            nome.value = dados.name
            id.value = dados.id
            altura.value = dados.height
            peso.value = dados.weight
            tipo.value = dados.types.map(t => t.type.name)
            habilidades.value = dados.abilities.map(a => a.ability.name)
            estatisticas.innerText = dados.stats.map(stat => ({nome: stat.stat.name, valor: stat.base_stat}))
        })

        .catch(error => {
            console.error('Erro:', error)
        });
}