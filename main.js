const keys = document.querySelectorAll(".key")

function playNote(event) {

    const keyCode = getKeyCode(event)

    const key = document.querySelector(`.key[data-key="${keyCode}"]`)

    const keyDoesNotExist = !key

    if(keyDoesNotExist) {
        return
    }

    addPlayingClass(key)
    playAudio(keyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

function getKeyCode(event) {

    let keyCode

    const isKeyboard = event.type === "keydown"
    
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    audio.currentTime = 0
    console.log(audio)
    audio.play()
}

function registerEvent() {
    keys.forEach( function (key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })
    
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvent)