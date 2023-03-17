function verificaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        ElementoChute.innerHTML += `<div>Diga um número valido</div>`
        return
    }
    if (numeroForadoIntervalo(numero)) {
        ElementoChute.innerHTML += ` <div> O número secreto está ${menorValor} e ${maiorValor} </div>`
        return
    } if (numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2> Acertou!</h2>
        <h3> O numero secreto era ${numeroAleatorio}</h3>
        <button id="jogardnv" class="btn-jogar">Jogar Novamente</button>
    `
    } else if (numero > numeroAleatorio) { ElementoChute.innerHTML += `<div> o número secreto é menor <i class="fa-sharp fa-solid fa-angle-down"></i></div>` }
    if (numero < numeroAleatorio) { ElementoChute.innerHTML += '<div> o número secreto é maior <i class="fa-sharp fa-solid fa-angle-up"></i></div>' }


    function chuteInvalido(numero) { return Number.isNaN(numero) }

    function numeroForadoIntervalo(numero) { return numero > maiorValor || numero < menorValor }

    document.addEventListener('click', e => {
        if (e.target.id == 'jogardnv') {
            window.location.reload
        }
    })
}