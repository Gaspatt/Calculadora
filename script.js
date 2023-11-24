let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let resultado = document.querySelector('#resultado');

let btSoma = document.querySelector("#btSoma")

btSoma.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value))
})

let btsub = document.querySelector('#btsub')
btsub.addEventListener("click", function () {
    subtracao(Number(valor1.value), Number(valor2.value))
})

let btmult = document.querySelector('#btmult')
btmult.addEventListener("click", function () {
    multiplicacao(Number(valor1.value), Number(valor2.value))
})

let btdiv = document.querySelector('#btdiv')
btdiv.addEventListener("click", function () {
    divisao(Number(valor1.value), Number(valor2.value))
})

function soma(a, b) {

    document.querySelector('#resultado').value = resultado.textContent = (a + b)


}

function subtracao(a, b) {
    document.querySelector('#resultado').value = resultado.textContent = (a - b)

}

function multiplicacao(a, b) {
    document.querySelector('#resultado').value = resultado.textContent = (a * b)

}

function divisao(a, b) {
    document.querySelector('#resultado').value = resultado.textContent = (a / b)

}