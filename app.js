let chromeElem = document.querySelector(".chrome")
let firefoxElem = document.querySelector(".firefox")
let edgeElem = document.querySelector(".edge")
let operaElem = document.querySelector(".opera")
let safariElem = document.querySelector(".safari")

window.addEventListener("load",()=> {
    if (window.navigator.userAgent.match(/Edg/i) !== null) edgeElem.style.opacity = "1";
    else if (window.navigator.userAgent.match(/firefox/i) !== null) firefoxElem.style.opacity = "1";
    else if (window.navigator.userAgent.match(/opera/i) !== null)  operaElem.style.opacity = "1";
    else if (window.navigator.userAgent.match(/chrome/i) !== null) chromeElem.style.opacity = "1";
    else if (window.navigator.userAgent.match(/safari/i) !== null) safariElem.style.opacity = "1";
    else alert("Sorry!! We Don't Support Your Browser! ")
})

