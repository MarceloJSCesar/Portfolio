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

// DOM part demonstration of animation date math password

            // HTML
const htmlCode = document.querySelector('#html-code') 
htmlCode.innerText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Transition</title>
</head>
<body>
    <h1 id="fname">
        D Jordan
    </h1>
<script src="script.js"></script>
</body>
</html>`
htmlCode.classList.add('tagsCode')

            // CSS

const cssCode = document.querySelector('#css-code')
cssCode.innerText = `* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
} \n
h1 {
    text-align: center;
    font-family: sans-serif;
    font-size: 35px;
    margin: 12rem;
} \n 
span{
    opacity: 0;
    transition: all 1s ease;
    transform: translateY(0);
} \n
span.fade{
    opacity: 1;
    transform: translateY(50);
}`
cssCode.classList.add('tagsCode')


            // JavaScript

const jsCode = document.querySelector('#js-code')
jsCode.innerText = `const text = document.querySelector('#fname')
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
    }`
jsCode.classList.add('tagsCode')