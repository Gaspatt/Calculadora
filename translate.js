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
seletIdioma.addEventListener('change', function () {
    translate(this.value)
})

function translate(idioma) {
    const traducao = (idioma == 'br') ? portugues()
        : (idioma == 'es') ? espanhol()
            : (idioma == 'en') ? english()
                : (idioma == 'fr') ? francais()
                    : null;
    setLanguage(traducao)
}

function setLanguage(traducao) {
    btSoma = document.getElementById('btSoma')
    btsub = document.getElementById('btsub')
    btdiv = document.getElementById('btdiv')
    btmult = document.getElementById('btmult')
    titulo = document.getElementById('titulo')

    btSoma.value = traducao.btSoma
    btsub.value = traducao.btsub
    btdiv.value = traducao.btdiv
    btmult.value = traducao.btmulti
    titulo.value = traducao.titulo

}