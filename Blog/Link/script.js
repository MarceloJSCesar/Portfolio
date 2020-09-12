const text = document.querySelector('#title-header')
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



const text_two = document.querySelector('#links-title')
const srtText_two = text_two.textContent
const splitText_two = srtText_two.split("")
text_two.textContent = ""

    for(let a in splitText_two){
        text_two.innerHTML += "<span>" + splitText_two[a] + "</span>" 
    }

let char_two = 0
let timer_two = setInterval(onTick_two,50)

    function onTick_two(){

        const span_two = text_two.querySelectorAll('span')[char_two]
        span_two.classList.add('fade_two')
        char_two++

        if(char_two === splitText_two.length){
            complete_two()
            return
        }
    }

    function complete_two(){
        clearInterval(timer_two)
        timer_two = null
    }

