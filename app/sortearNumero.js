const maiorValor = 1000
const menorValor = 1
const numeroAleatorio = geraAleatorio()



function geraAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}
console.log(numeroAleatorio)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor