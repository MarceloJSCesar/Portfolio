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


/////////////////////////  Animation  ///////////////////////


            // HTML
const htmlCodeAnimation = document.querySelector('#html-code-animation') 
htmlCodeAnimation.innerText = `<!DOCTYPE html>
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
htmlCodeAnimation.classList.add('tagsCode')

            // CSS

const cssCodeAnimation = document.querySelector('#css-code-animation')
cssCodeAnimation.innerText = `* {
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
cssCodeAnimation.classList.add('tagsCode')


            // JavaScript

const jsCodeAnimation = document.querySelector('#js-code-animation')
jsCodeAnimation.innerText = `const text = document.querySelector('#fname')
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
jsCodeAnimation.classList.add('tagsCode')



/////////////////////////  Date  ///////////////////////



                     // HTML
 const htmlCodeDate = document.querySelector('#html-code-date') 
 htmlCodeDate.innerText = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="style.css">
     <title>Transition</title>
 </head>
 <body>
     <h1 id="fullTime">
         
     </h1>
 <script src="script.js"></script>
 </body>
 </html>`
 htmlCodeDate.classList.add('tagsCode')
 
             // CSS
 
 const cssCodeDate = document.querySelector('#css-code-date')
 cssCodeDate.innerText = `* {
     box-sizing: border-box;
     padding: 0;
     margin: 0;
 } \n
 h1 {
     text-align: center;
     font-family: sans-serif;
     font-size: 35px;
     margin: 12rem;
 } \n `
 cssCodeDate.classList.add('tagsCode')
 
 
             // JavaScript
 
 const jsCodeDate = document.querySelector('#js-code-date')
 jsCodeDate.innerText = ` const fullTime = document.getElementById("#fullTime")

 function TimeToday(){

const fullTime = document.getElementById("#fullTime")
const data = new Date()
const hours = data.getHours()
const minutes =  data.getMinutes()
const seconds = data.getSeconds()
 
 fullTime.innerHTML = "It's" + hours "hours" + minutes + "minutes" + and + seconds + "seconds" 

}

TimeToday()
setInterval(TimeToday, 1000)
`
 jsCodeDate.classList.add('tagsCode')