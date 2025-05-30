const botaoAbrir = document.getElementById("consultar")
const modal = document.getElementById("modal")

function abrirConsulta()
{
    abrir()
    consulta()
}

function abrir()
{
    modal.style.display = "flex"

    if(mostrarMapa() == true)
    {
        modal.style.display = "none"
    }
}

window.addEventListener("click", (e) => 
{
    if(e.target === modal)
    {
        modal.style.display = "none"
    }
})

function consulta()
{
    var input = document.getElementById("cep")

    var url = "https://viacep.com.br/ws/" + cep.value + "/json/"
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            var cep = document.getElementById('cep')
            var rua = document.getElementById('rua')
            var numero = document.getElementById('numero')
            var bairro = document.getElementById('bairro')
            var cidade = document.getElementById('cidade')
            var estado = document.getElementById('estado')
            rua.value = dados.logradouro
            bairro.value = dados.bairro
            cidade.value = dados.localidade
            estado.value = dados.estado
        }
        )
        .catch(error => console.error('Erro:', error));
}

function mostrarMapa() {
    const rua = document.getElementById('rua').value
    const numero = document.getElementById('numero').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value

    const endereco = `${rua}, ${numero}, ${cidade}, ${estado}`

    // Usa Nominatim (gratuito) para geocodificação
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`

    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (dados.length === 0) {
                alert("Endereço não encontrado!")
                return
            }

            const lat = dados[0].lat
            const lon = dados[0].lon

            // Cria o mapa ou atualiza se já existe
            const mapaDiv = document.getElementById("mapa")
            mapaDiv.innerHTML = "" // limpa o mapa anterior

            const mapa = L.map("mapa").setView([lat, lon], 16)

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors"
            }).addTo(mapa)

            L.marker([lat, lon]).addTo(mapa)
                .bindPopup(endereco)
                .openPopup()

                modal.style.display = "none";
        })
        .catch(error => {
            console.error("Erro ao buscar localização:", error)
            alert("Não foi possível localizar o endereço.")
        })
}
