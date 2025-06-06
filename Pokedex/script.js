const modal = document.getElementById("modal")

function buscarNome(){
    abrir()
    nome()
}

function bsucarId()
{
    abrir()
    identificador()
}

function abrir()
{
    modal.style.display = "flex"
}

window.addEventListener("click", (e) => 
    {
        if(e.target === modal)
        {
            modal.style.display = "none"
        }
    })

function nome()
{
    var input = document.getElementById("nomepoke")

    var url = "https://pokeapi.co/api/v2/pokemon/" + input.value
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
            estatisticas.value = dados.stats.map(stat => ({nome: stat.stat.name, valor: stat.base_stat}))
        })

        .catch(error => {
            console.error('Erro:', error)
        });

}

function identificador()
{
    var input = document.getElementById("identificador")

    var url = "https://pokeapi.co/api/v2/pokemon/" + input.value
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
            estatisticas.value = dados.stats.map(stat => ({nome: stat.stat.name, valor: stat.base_stat}))
        })

        .catch(error => {
            console.error('Erro:', error)
        });
}

