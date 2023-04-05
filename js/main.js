const robotron = document.querySelector("#robotron");
const braco = document.querySelector("#braco");
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.textContent)
    })
})

robotron.addEventListener("click", dizOi);

function dizOi(){
    console.log("oi")
}

function manipulaDados(operacao){
    if(operacao === "-"){
        braco.value = parseInt(braco.value) - 1
    } else [
        braco.value = parseInt(braco.value) + 1
    ]
}