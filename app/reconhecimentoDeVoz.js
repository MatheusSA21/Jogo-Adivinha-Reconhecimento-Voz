const ElementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)


function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    exibeChute(chute)
    verificaChute(chute)
}

function exibeChute(chute) {
    ElementoChute.innerHTML = `
    <div> Você disse: </div>
    <span class="box"> ${chute} </span>
`
}

recognition.addEventListener('end', () => recognition.start)