//document.body.style.background = "red"

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {

    element.addEventListener('click', function()  {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links){
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
//console.log(navHeight)

function sombraHeader() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

const buttonTop = document.querySelector('.voltar')

function voltarTop() {
    if (window.scrollY >= 500) {
        buttonTop.classList.add('show')
    } else {
        buttonTop.classList.remove('show')
    }
}

window.addEventListener('scroll', function(){
    sombraHeader()
    voltarTop()
})