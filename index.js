function mostrarMensagem (){
    mensagem.style.display = "block";
}
const botao =
document.querySelector("#botao");

const mensagem =
document.querySelector("#mensagem");

botao.addEventListener("click",mostrarMensagem);