const source = 'https://rerofya.github.io/resources/'
const piano = document.querySelectorAll('.piano')

piano.forEach((element) => {
    element.addEventListener('click', function(e) {
        const note = e.target.getAttribute('data-note')
        const audio = new Audio(source + note + '.mp3')
        audio.type = 'audio/wav'
        audio.play()
    })
})