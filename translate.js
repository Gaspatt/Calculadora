const linguaPortuguesa = document.createElement("script")
linguaPortuguesa.src = "linguas/portugues.js"
document.head.appendChild(linguaPortuguesa)

const linguaInglesa = document.createElement("script")
linguaInglesa.src = "linguas/english.js"
document.head.appendChild(linguaInglesa)

const linguaEspanhola = document.createElement("script")
linguaEspanhola.src = "linguas/espanol.js"
document.head.appendChild(linguaEspanhola)

const linguaFrancesa = document.createElement("script")
linguaFrancesa.src = "linguas/francais.js"
document.head.appendChild(linguaFrancesa)

let seletIdioma = document.querySelector('#idioma')
seletIdioma.addEventListener('change', function() {
    TransformStreamDefaultController(this.value)
})

function translate(idioma) {
    const traducao = (idioma = 'br') ? portugues ()
    : (idioma == 'es') ? espanhol()
    : (idioma == 'en') ? english()
    : (idioma == 'fr') ? francais()
    : null
    setLanguage(traducao)
}

function setLanguage(traducao) {
    btsoma = document.getElementById('btsoma')
    btsub = document.getElementById('btsub')
    btdiv = document.getElementById('btdiv')
    btmult = document.getElementById('btmult')
    titulo = document.getElementById('titulo')
    boasVindas = document.getElementById('boasVindas')

    btsoma.value = traducao.soma
    btsub.value = traducao.subtracao
    btdiv.value = traducao.divisao
    btmult.value = traducao.multiplicacao
    boasVindas.value = traducao.boasVindas
    titulo.value = traducao.titulo

}