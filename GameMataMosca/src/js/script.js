var altura = 0
var largura = 0
function redicionamentoDeTela() {
    altura = window.innerHeight
    largura = window.innerWidth
}
redicionamentoDeTela()

function posicaoRandonica() {
    //remover oo mosquito anterior (caso exista)
    if (document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()
    }
     
    var posicaoX = Math.floor(Math.random() * largura) - 85
    var posicaoY = Math.floor(Math.random() * altura) - 85
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criando elemento html
    var mosquito = document.createElement("img")
    mosquito.src = "/src/img/mosca.png"
    mosquito.className = tamanhoAleatorio() + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = "mosquito"

    document.body.appendChild(mosquito)
}

//Criando lado aleatorios em que as moscas irão aparecer
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    if (classe == 0) {
        return "mosquito1 "
    } else if (classe == 1) {
        return "mosquito2 "
    } else if (classe == 2) {
        return "mosquito3 "
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    if (classe == 0) {
        return "ladoA"
    } else {
        return "ladoB"
    }
}
// setInterval(
//     function () {
//         posicaoRandonica()
//     }
// ,1000)
