let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let resultado = document.querySelector('#resultado');
let btSoma = document.querySelector("#btSoma")
let btsub = document.querySelector('#btsub')
let btmult = document.querySelector('#btmult')
let btdiv = document.querySelector('#btdiv')


btSoma.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value))
})


btsub.addEventListener("click", function () {
    subtracao(Number(valor1.value), Number(valor2.value))
})


btmult.addEventListener("click", function () {
    multiplicacao(Number(valor1.value), Number(valor2.value))
})


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

