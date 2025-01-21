var altura = 0
var largura = 0

function redicionamentoDeTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura);

}
redicionamentoDeTela()

   function posicaoRandonica(){
    var posicaoX = Math.floor(Math.random() * largura) - 60
    var posicaoY = Math.floor(Math.random() * altura) - 50

    //Criando elemento html
    var mosquito = document.createElement("img")
    mosquito.src = "/src/img/mosca.png"
    mosquito.className = tamanhoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
}
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    if(classe == 0 ){
        return "mosquito1"
    }else if(classe == 1){
        return "mosquito2"
    }else if(classe == 2){
        return "mosquito3"
    }
}