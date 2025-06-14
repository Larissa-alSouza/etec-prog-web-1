const nomepoke = document.getElementById("nomepoke")
const identificador = document.getElementById("identificador");

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
        estatisticas.innerHTML=""
        for(var i = 0; i < dados.stats.length; i++)
            {
                estatisticas.innerHTML +=   dados.stats[i].stat.name+ "  "+    dados.stats[i].base_stat+"<br>"     
            }
    })

    .catch(error => {
        console.error('Erro:', error)
    });

// Ativa o botão de buscar por nome
function buscarNome(){
    abrir()
    pesquisa(nomepoke)
}

// Ativa o botão de buscar por Id
function buscarId()
{
    abrir()
    pesquisa(identificador)
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

// função para pesquisar os pokemons pela API
function pesquisa(tipo)
{

    if(tipo == nomepoke)
    {
        var url = "https://pokeapi.co/api/v2/pokemon/" + tipo.value
        console.log(url)
    }
    else if(tipo == identificador)
    {
        var url = "https://pokeapi.co/api/v2/pokemon/" + tipo.value
    }
    else if(tipo == 'botao-frente')
    {
        console.log(numeroPokemon)
        var idpoke = numeroPokemon+1;
        numeroPokemon++;
        console.log(idpoke)
        var url = "https://pokeapi.co/api/v2/pokemon/" + idpoke
    }
    else if(tipo == 'botao-volta')
    {
        var idpoke = numeroPokemon -1;
        numeroPokemon--
        var url = "https://pokeapi.co/api/v2/pokemon/" + idpoke
    }

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