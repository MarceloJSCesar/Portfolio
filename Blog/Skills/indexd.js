const text = document.querySelector('#fname')
const srtText = text.textContent
const splitText = srtText.split("")
text.textContent = ""

    for(let i in splitText){
        text.innerHTML += "<span>" + splitText[i] + "</span>" 
    }

let char = 0
let timer = setInterval(onTick,50)

    function onTick(){

        const span = text.querySelectorAll('span')[char]
        span.classList.add('fade')
        char++

        if(char === splitText.length){
            complete()
            return
        }
    }

    function complete(){
        clearInterval(timer)
        timer = null
    }