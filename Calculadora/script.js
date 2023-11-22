function Somar() {
    let valor1 = document.querySelector('#valor1')
    let valor2 = document.querySelector('#valor2')
    let resultado = document.querySelector('#resultado')

    let btsoma = document.querySelector('#btsoma')
    btsoma.addEventListener("click", function () {
        soma(Number(valor1.value), Number(valor2.value))
    })

    function soma(a, b) {
        resultado.textContent = (a + b)
        alert(a+b-)
    }
}